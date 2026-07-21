# Drink Run — Website Project Plan

**Tagline:** "Let's enjoy it and have some fun!"
**Brand colors:** Navy blue + yellow (from logo)

---

## 1. Scope (Phase 1 — Current Build)

Simple informational site, no ordering/cart yet:

- **Home** — hero section with logo/branding, tagline, highlights of top drinks
- **Menu** — categorized drinks/food, each with photo, name (AR/EN), description, price
- **About** — story of Drink Run, vibe/branding
- **Branches** — list of locations with address, map, hours, phone/contact

**Not included yet (Phase 2+):**
- Admin dashboard
- QR code table ordering system
- Cart / checkout / payments
- Order tracking

The stack below is chosen specifically so Phase 2 can be added later **without rebuilding the site** — menu/branch data is DB-backed from day one instead of hardcoded.

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | Next.js (React) + Tailwind CSS | Fast, SEO-friendly, clean RTL/Arabic support, scales naturally into ordering UI later |
| **Backend** | Next.js API Routes (on Supabase) | Light API layer now means data comes from the DB, not hardcoded — critical for adding QR ordering + admin later without a rewrite |
| **Database** | PostgreSQL via Supabase | One platform for DB + Auth (future admin login) + Storage (menu photos) |
| **Hosting** | Vercel (frontend/API) + Supabase (DB) | Free tier covers this scope comfortably |
| **Language** | Bilingual — Arabic + English (RTL support) | Local + wider reach |

---

## 3. Database Schema (Phase 1)

```
branches
  id, name_ar, name_en, address, phone, map_url, hours

categories
  id, name_ar, name_en, sort_order

menu_items
  id, category_id, name_ar, name_en, description, price, image_url, is_available
```

### Planned additions for Phase 2 (QR ordering + admin)
```
tables       (id, branch_id, table_number, qr_code_url)
orders       (id, table_id, status, total_price, created_at)
order_items  (id, order_id, menu_item_id, quantity, unit_price)
admins       (id, email, password_hash, role)
```
No changes needed to Phase 1 tables — these just get added alongside.

---

## 4. Page Structure

```
/                → Home
/menu            → Menu (filter by category)
/about           → About Drink Run
/branches        → Branches list + map
```

---

## 5. Design Direction

- Stick closely to logo colors: navy blue + yellow, white space
- Playful/summery feel (sun, waves, umbrella motifs from the logo)
- Mobile-first — most cafe customers will browse on phone

---

## 6. Future Features (Planned in Detail)

### 6.1 Admin Panel — Priority Feature
A login-protected dashboard for staff/owners to run the business day-to-day without touching code. This is the operational core once QR ordering goes live, so it's planned in depth:

**Menu management**
- Add/edit/remove menu items (name AR/EN, price, photo, category, description)
- Toggle item availability instantly (e.g. mark "out of stock" mid-shift)
- Manage categories and their display order
- Bulk price updates

**Branch management**
- Add/edit branches (address, hours, phone, map link)
- Assign tables/QR codes per branch

**Order management (once QR ordering is live)**
- Live incoming order queue per branch/table, auto-refreshing
- Update order status: received → preparing → ready → completed
- Order history & search (by table, date, status)
- Basic daily/weekly sales summary (revenue, top-selling items)

**Staff & access control**
- Role-based accounts: Owner (full access) vs Branch Staff (orders + menu availability only)
- Simple activity log (who changed what, useful for multi-branch accountability)

**Notifications (nice-to-have, later)**
- Sound/visual alert on new incoming order
- Optional: notify staff phone/WhatsApp on new order

### 6.2 QR Code Table Ordering System
- Each physical table gets a unique QR code (linked to `table_id` + `branch_id`)
- Customer scans QR → opens the menu pre-filtered to their branch, with an "order" flow
- Order gets submitted with the table reference — no login required for customers
- Staff/admin panel shows incoming orders per table in real time, updates status
- Built on the same `menu_items`/`categories`/`branches` tables from Phase 1 — just adds `tables`, `orders`, `order_items` as shown in the schema above

These two features are the reason the site is built DB-backed via Supabase from Phase 1 instead of a static/hardcoded site — so this layer plugs in later without a rebuild.

---

## 7. Roadmap

1. **Phase 1** ✅ (this plan) — Static-feel bilingual site: Home, Menu, About, Branches — DB-backed
2. **Phase 2 (priority)** — Admin panel: menu, categories, branches, staff roles — the operational backbone for everything after
3. **Phase 3** — QR code table ordering system (scan → menu → order → admin panel shows it live)
4. **Phase 4 (optional)** — Payments, order status tracking for customers, loyalty/reviews

---

## 8. Open Items / To Confirm Later

- Real menu items, prices, and photos (placeholders will be used until provided)
- Number and details of branches
- Final domain name / hosting account setup
