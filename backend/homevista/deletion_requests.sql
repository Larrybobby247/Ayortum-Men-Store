-- HomeVista account deletion requests (run once in the Supabase SQL editor).
-- Row Level Security is ON with NO policies, so the public anon key can read or
-- write nothing. Only the server-side service-role key (used by
-- /api/homevista/delete-request.js) can access this table.

create table if not exists public.homevista_deletion_requests (
  id               uuid primary key default gen_random_uuid(),
  reference        text not null unique,
  full_name        text not null,
  email            text not null,
  email_normalized text not null,
  phone            text,
  account_type     text not null check (account_type in ('Buyer', 'Seller', 'Agent')),
  reason           text,
  status           text not null default 'received'
                   check (status in ('received', 'verifying', 'processing', 'completed', 'rejected')),
  user_agent       text,
  admin_notes      text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- Only one OPEN request per email: a hard guard against duplicates and races.
create unique index if not exists homevista_deletion_one_open_per_email
  on public.homevista_deletion_requests (email_normalized)
  where status in ('received', 'verifying', 'processing');

create index if not exists homevista_deletion_status_created
  on public.homevista_deletion_requests (status, created_at desc);

alter table public.homevista_deletion_requests enable row level security;

create or replace function public.homevista_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists homevista_deletion_touch on public.homevista_deletion_requests;
create trigger homevista_deletion_touch
  before update on public.homevista_deletion_requests
  for each row execute function public.homevista_touch_updated_at();
