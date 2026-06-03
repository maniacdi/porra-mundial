-- ============================================================
-- PORRA MUNDIAL 2026 - Supabase Setup
-- ============================================================
-- Run this in your Supabase SQL Editor (supabase.com > SQL Editor)
-- ============================================================

CREATE TABLE IF NOT EXISTS team_selections (
  id BIGSERIAL PRIMARY KEY,
  group_code TEXT NOT NULL,
  player_code TEXT NOT NULL,
  team_id INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(group_code, player_code, team_id)
);

CREATE TABLE IF NOT EXISTS match_results (
  id TEXT PRIMARY KEY,
  group_code TEXT NOT NULL DEFAULT 'tonsOf',
  stage TEXT NOT NULL,
  group_name TEXT,
  home_team_id INTEGER NOT NULL,
  away_team_id INTEGER NOT NULL,
  home_score INTEGER,
  away_score INTEGER,
  result_type TEXT DEFAULT 'regular',
  penalty_winner_id INTEGER,
  top_scorer_team_id INTEGER,
  played BOOLEAN DEFAULT FALSE,
  match_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS qualified_thirds (
  id BIGSERIAL PRIMARY KEY,
  group_code TEXT NOT NULL DEFAULT 'tonsOf',
  team_id INTEGER NOT NULL,
  group_name TEXT NOT NULL,
  UNIQUE(group_code, team_id)
);

ALTER TABLE team_selections ENABLE ROW LEVEL SECURITY;
ALTER TABLE match_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE qualified_thirds ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for team_selections" ON team_selections FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for match_results" ON match_results FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for qualified_thirds" ON qualified_thirds FOR ALL USING (true) WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_selections_group ON team_selections(group_code);
CREATE INDEX IF NOT EXISTS idx_matches_group ON match_results(group_code);
