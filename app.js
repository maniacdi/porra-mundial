// ============================================================
// PORRA MUNDIAL 2026 - Main Application
// ============================================================

// ========== CONFIGURATION ==========
const CONFIG = {
  GROUP_CODE: 'tonsOf',
  BUDGET: 30,
  MAX_OWNERS_PER_TEAM: 2,
  SUPABASE_URL: 'https://zzupgeibyysyjudyfgls.supabase.co',
  SUPABASE_ANON_KEY:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dXBnZWlieXlzeWp1ZHlmZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0ODk0NDksImV4cCI6MjA5NjA2NTQ0OX0.1O-SfxB5tS0CtcqMe4GRhuK5ZOa8YOGBTEmU9VSPXFM',
  FOOTBALL_API_KEY: '', // Optional: football-data.org free API key
  ADMIN_CODES: ['thetoxic'], // Players who can manage results
};

const PLAYERS = [
  { code: 'songc', name: 'Sony', avatar: '🌮' },
  { code: 'vitorrm', name: 'RMBitor', avatar: '⚡' },
  { code: 'cabeza950', name: 'Cabeza', avatar: '🫃🏼' },
  { code: 'thetoxic', name: 'Magaldi', avatar: '☠️' },
  { code: 'princess', name: 'Joosk10', avatar: '👑' },
  { code: 'Alavaro', name: 'Dwexe', avatar: '🦧' },
  { code: 'Plano', name: 'Bighero', avatar: '🏋🏼' },
  { code: 'Despistao', name: 'DaniRojoMarlasca7217', avatar: '🔴' },
];

const TEAMS = [
  { id: 1, name: 'España', flag: '🇪🇸', cost: 29, group: 'H' },
  { id: 2, name: 'Francia', flag: '🇫🇷', cost: 27, group: 'I' },
  { id: 3, name: 'Inglaterra', flag: '🇬🇧', cost: 26, group: 'L' },
  { id: 4, name: 'Brasil', flag: '🇧🇷', cost: 24, group: 'C' },
  { id: 5, name: 'Argentina', flag: '🇦🇷', cost: 24, group: 'J' },
  { id: 6, name: 'Portugal', flag: '🇵🇹', cost: 20, group: 'K' },
  { id: 7, name: 'Alemania', flag: '🇩🇪', cost: 20, group: 'E' },
  { id: 8, name: 'Países Bajos', flag: '🇳🇱', cost: 19, group: 'F' },
  { id: 9, name: 'Noruega', flag: '🇳🇴', cost: 18, group: 'I' },
  { id: 10, name: 'Bélgica', flag: '🇧🇪', cost: 17, group: 'G' },
  { id: 11, name: 'Colombia', flag: '🇨🇴', cost: 17, group: 'K' },
  { id: 12, name: 'Japón', flag: '🇯🇵', cost: 15, group: 'F' },
  { id: 13, name: 'USA', flag: '🇺🇸', cost: 14, group: 'D' },
  { id: 14, name: 'Marruecos', flag: '🇲🇦', cost: 14, group: 'C' },
  { id: 15, name: 'Uruguay', flag: '🇺🇾', cost: 14, group: 'H' },
  { id: 16, name: 'Suiza', flag: '🇨🇭', cost: 13, group: 'B' },
  { id: 17, name: 'México', flag: '🇲🇽', cost: 13, group: 'A' },
  { id: 18, name: 'Croacia', flag: '🇭🇷', cost: 13, group: 'L' },
  { id: 19, name: 'Turquía', flag: '🇹🇷', cost: 13, group: 'D' },
  { id: 20, name: 'Ecuador', flag: '🇪🇨', cost: 11, group: 'E' },
  { id: 21, name: 'Senegal', flag: '🇸🇳', cost: 10, group: 'I' },
  { id: 22, name: 'Suecia', flag: '🇸🇪', cost: 10, group: 'F' },
  { id: 23, name: 'Canadá', flag: '🇨🇦', cost: 9, group: 'B' },
  { id: 24, name: 'Austria', flag: '🇦🇹', cost: 9, group: 'J' },
  { id: 25, name: 'Paraguay', flag: '🇵🇾', cost: 9, group: 'D' },
  { id: 26, name: 'Escocia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', cost: 8, group: 'C' },
  { id: 27, name: 'Bosnia Herz.', flag: '🇧🇦', cost: 8, group: 'B' },
  { id: 28, name: 'Costa Marfil', flag: '🇨🇮', cost: 7, group: 'E' },
  { id: 29, name: 'Egipto', flag: '🇪🇬', cost: 7, group: 'G' },
  { id: 30, name: 'Chequia', flag: '🇨🇿', cost: 7, group: 'A' },
  { id: 31, name: 'Ghana', flag: '🇬🇭', cost: 6, group: 'L' },
  { id: 32, name: 'Argelia', flag: '🇩🇿', cost: 6, group: 'J' },
  { id: 33, name: 'Corea del Sur', flag: '🇰🇷', cost: 5, group: 'A' },
  { id: 34, name: 'Túnez', flag: '🇹🇳', cost: 5, group: 'F' },
  { id: 35, name: 'Australia', flag: '🇦🇺', cost: 5, group: 'D' },
  { id: 36, name: 'Irán', flag: '🇮🇷', cost: 5, group: 'G' },
  { id: 37, name: 'Congo', flag: '🇨🇩', cost: 4, group: 'K' },
  { id: 38, name: 'Sudáfrica', flag: '🇿🇦', cost: 3, group: 'A' },
  { id: 39, name: 'Catar', flag: '🇶🇦', cost: 3, group: 'B' },
  { id: 40, name: 'Arabia Saudí', flag: '🇸🇦', cost: 3, group: 'H' },
  { id: 41, name: 'Panamá', flag: '🇵🇦', cost: 2, group: 'L' },
  { id: 42, name: 'Nueva Zelanda', flag: '🇳🇿', cost: 2, group: 'G' },
  { id: 43, name: 'Irak', flag: '🇮🇶', cost: 2, group: 'I' },
  { id: 44, name: 'Cabo Verde', flag: '🇨🇻', cost: 2, group: 'H' },
  { id: 45, name: 'Curazao', flag: '🇨🇼', cost: 2, group: 'E' },
  { id: 46, name: 'Uzbekistán', flag: '🇺🇿', cost: 2, group: 'K' },
  { id: 47, name: 'Jordania', flag: '🇯🇴', cost: 1, group: 'J' },
  { id: 48, name: 'Haití', flag: '🇭🇹', cost: 0, group: 'C' },
];

const GROUP_NAMES = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
];

// Mapping from openfootball JSON team names to our team IDs
const API_NAME_MAP = {
  Mexico: 17,
  'South Africa': 38,
  'South Korea': 33,
  'Czech Republic': 30,
  Czechia: 30,
  Canada: 23,
  Switzerland: 16,
  Qatar: 39,
  'Bosnia and Herzegovina': 27,
  'Bosnia & Herzegovina': 27,
  Bosnia: 27,
  Bosnia: 27,
  Brazil: 4,
  Morocco: 14,
  Haiti: 48,
  Scotland: 26,
  USA: 13,
  'United States': 13,
  Paraguay: 25,
  Australia: 35,
  Turkey: 19,
  Türkiye: 19,
  Germany: 7,
  Curaçao: 45,
  Curacao: 45,
  'Ivory Coast': 28,
  "Côte d'Ivoire": 28,
  Ecuador: 20,
  Netherlands: 8,
  Japan: 12,
  Sweden: 22,
  Tunisia: 34,
  Belgium: 10,
  Egypt: 29,
  Iran: 36,
  'New Zealand': 42,
  Spain: 1,
  'Cape Verde': 44,
  'Cabo Verde': 44,
  'Saudi Arabia': 40,
  Uruguay: 15,
  France: 2,
  Senegal: 21,
  Norway: 9,
  Iraq: 43,
  Argentina: 5,
  Algeria: 32,
  Austria: 24,
  Jordan: 47,
  Portugal: 6,
  Colombia: 11,
  Uzbekistan: 46,
  'DR Congo': 37,
  'Congo DR': 37,
  Congo: 37,
  England: 3,
  Croatia: 18,
  Ghana: 31,
  Panama: 41,
  // Playoff placeholders
  'UEFA Path D winner': 30,
  'UEFA Path A winner': 27,
  'UEFA Path C winner': 19,
  'UEFA Path B winner': 22,
  'IC Path 2 winner': 43,
  'IC Path 1 winner': 37,
};

const OPENFOOTBALL_URL =
  'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json';

// ========== STATE ==========
let currentPlayer = null;
let allSelections = [];
let allMatches = [];
let qualifiedThirds = [];
let sbClient = null;

// ========== DATA STORE (Supabase or LocalStorage fallback) ==========
function isSupabaseConfigured() {
  return CONFIG.SUPABASE_URL && CONFIG.SUPABASE_ANON_KEY;
}

function initSupabase() {
  if (!isSupabaseConfigured()) return;
  // @ts-ignore
  const { createClient } = window.supabase;
  sbClient = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
}

const Store = {
  async loadSelections() {
    if (sbClient) {
      const { data } = await sbClient
        .from('team_selections')
        .select('*')
        .eq('group_code', CONFIG.GROUP_CODE);
      allSelections = data || [];
    } else {
      allSelections = JSON.parse(
        localStorage.getItem('porra_selections') || '[]',
      );
    }
    return allSelections;
  },

  async selectTeam(playerCode, teamId) {
    const entry = {
      group_code: CONFIG.GROUP_CODE,
      player_code: playerCode,
      team_id: teamId,
    };
    if (sbClient) {
      const { error } = await sbClient.from('team_selections').insert(entry);
      if (error) throw error;
    } else {
      allSelections.push({ ...entry, created_at: new Date().toISOString() });
      localStorage.setItem('porra_selections', JSON.stringify(allSelections));
    }
    await this.loadSelections();
  },

  async deselectTeam(playerCode, teamId) {
    if (sbClient) {
      await sbClient
        .from('team_selections')
        .delete()
        .eq('group_code', CONFIG.GROUP_CODE)
        .eq('player_code', playerCode)
        .eq('team_id', teamId);
    } else {
      allSelections = allSelections.filter(
        (s) => !(s.player_code === playerCode && s.team_id === teamId),
      );
      localStorage.setItem('porra_selections', JSON.stringify(allSelections));
    }
    await this.loadSelections();
  },

  async loadMatches() {
    if (sbClient) {
      const { data } = await sbClient
        .from('match_results')
        .select('*')
        .eq('group_code', CONFIG.GROUP_CODE)
        .order('id');
      allMatches = data || [];
    } else {
      allMatches = JSON.parse(localStorage.getItem('porra_matches') || '[]');
    }
    return allMatches;
  },

  async saveMatch(match) {
    if (sbClient) {
      const { error } = await sbClient.from('match_results').upsert({
        ...match,
        group_code: CONFIG.GROUP_CODE,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
    } else {
      const idx = allMatches.findIndex((m) => m.id === match.id);
      if (idx >= 0) allMatches[idx] = { ...allMatches[idx], ...match };
      else allMatches.push(match);
      localStorage.setItem('porra_matches', JSON.stringify(allMatches));
    }
    await this.loadMatches();
  },

  async loadQualifiedThirds() {
    if (sbClient) {
      const { data } = await sbClient
        .from('qualified_thirds')
        .select('*')
        .eq('group_code', CONFIG.GROUP_CODE);
      qualifiedThirds = data || [];
    } else {
      qualifiedThirds = JSON.parse(
        localStorage.getItem('porra_thirds') || '[]',
      );
    }
    return qualifiedThirds;
  },

  async saveQualifiedThirds(thirds) {
    if (sbClient) {
      await sbClient
        .from('qualified_thirds')
        .delete()
        .eq('group_code', CONFIG.GROUP_CODE);
      if (thirds.length > 0) {
        await sbClient.from('qualified_thirds').insert(
          thirds.map((t) => ({
            group_code: CONFIG.GROUP_CODE,
            team_id: t.team_id,
            group_name: t.group_name,
          })),
        );
      }
    } else {
      localStorage.setItem('porra_thirds', JSON.stringify(thirds));
    }
    qualifiedThirds = thirds;
  },

  async resetAllSelections() {
    if (sbClient) {
      await sbClient
        .from('team_selections')
        .delete()
        .eq('group_code', CONFIG.GROUP_CODE);
    } else {
      localStorage.removeItem('porra_selections');
    }
    allSelections = [];
  },

  async resetAllMatches() {
    if (sbClient) {
      await sbClient
        .from('match_results')
        .delete()
        .eq('group_code', CONFIG.GROUP_CODE);
    } else {
      localStorage.removeItem('porra_matches');
    }
    allMatches = [];
  },

  async resetPlayerSelections(playerCode) {
    if (sbClient) {
      await sbClient
        .from('team_selections')
        .delete()
        .eq('group_code', CONFIG.GROUP_CODE)
        .eq('player_code', playerCode);
    } else {
      allSelections = allSelections.filter((s) => s.player_code !== playerCode);
      localStorage.setItem('porra_selections', JSON.stringify(allSelections));
    }
    await this.loadSelections();
  },
};

// ========== AUTH ==========
function login(groupCode, playerCode) {
  if (groupCode !== CONFIG.GROUP_CODE)
    return { error: 'Código de grupo incorrecto' };
  const player = PLAYERS.find((p) => p.code === playerCode);
  if (!player) return { error: 'Código de jugador no válido' };
  currentPlayer = player;
  localStorage.setItem(
    'porra_session',
    JSON.stringify({ groupCode, playerCode }),
  );
  return { success: true };
}

function logout() {
  currentPlayer = null;
  localStorage.removeItem('porra_session');
  showView('login');
}

function restoreSession() {
  const session = JSON.parse(localStorage.getItem('porra_session') || 'null');
  if (session) {
    const player = PLAYERS.find((p) => p.code === session.playerCode);
    if (player && session.groupCode === CONFIG.GROUP_CODE) {
      currentPlayer = player;
      return true;
    }
  }
  return false;
}

function isAdmin() {
  return currentPlayer && CONFIG.ADMIN_CODES.includes(currentPlayer.code);
}

// ========== POINTS ENGINE ==========
function getGroupTeams(groupName) {
  return TEAMS.filter((t) => t.group === groupName);
}

function getGroupMatches(groupName) {
  return allMatches.filter(
    (m) => m.stage === 'group' && m.group_name === groupName && m.played,
  );
}

function calculateGroupStandings(groupName) {
  const teams = getGroupTeams(groupName);
  const matches = getGroupMatches(groupName);

  const standings = teams.map((team) => {
    let pts = 0,
      gf = 0,
      ga = 0,
      w = 0,
      d = 0,
      l = 0,
      played = 0;
    for (const m of matches) {
      let goalsFor, goalsAgainst;
      if (m.home_team_id === team.id) {
        goalsFor = m.home_score;
        goalsAgainst = m.away_score;
      } else if (m.away_team_id === team.id) {
        goalsFor = m.away_score;
        goalsAgainst = m.home_score;
      } else continue;

      played++;
      gf += goalsFor;
      ga += goalsAgainst;
      if (goalsFor > goalsAgainst) {
        w++;
        pts += 3;
      } else if (goalsFor === goalsAgainst) {
        d++;
        pts += 1;
      } else {
        l++;
      }
    }
    return { team, pts, gf, ga, gd: gf - ga, w, d, l, played };
  });

  standings.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  standings.forEach((s, i) => (s.position = i + 1));
  return standings;
}

function getAllGroupStandings() {
  const all = {};
  for (const g of GROUP_NAMES) {
    all[g] = calculateGroupStandings(g);
  }
  return all;
}

function isThirdQualified(teamId) {
  return qualifiedThirds.some((t) => t.team_id === teamId);
}

function calculateTeamGamePoints(teamId) {
  let points = 0;
  const allStandings = getAllGroupStandings();
  const team = TEAMS.find((t) => t.id === teamId);
  if (!team) return 0;

  // === GROUP STAGE ===
  const groupMatches = allMatches.filter(
    (m) =>
      m.stage === 'group' &&
      m.played &&
      (m.home_team_id === teamId || m.away_team_id === teamId),
  );

  for (const m of groupMatches) {
    const isHome = m.home_team_id === teamId;
    const gf = isHome ? m.home_score : m.away_score;
    const ga = isHome ? m.away_score : m.home_score;
    const diff = gf - ga;

    if (diff > 0) points += 3;
    else if (diff === 0) points += 1;

    if (Math.abs(diff) >= 3) {
      points += diff > 0 ? 1 : -1;
    }
  }

  // Group position bonus
  const standing = allStandings[team.group]?.find((s) => s.team.id === teamId);
  if (standing && standing.played > 0) {
    if (standing.position === 1) points += 3;
    else if (standing.position === 2) points += 2;
    else if (standing.position === 3 && isThirdQualified(teamId)) points += 1;
    else if (standing.position === 4) {
      points -= standing.pts === 0 ? 3 : 1;
    }
  }

  // === KNOCKOUT STAGE ===
  const knockoutMatches = allMatches.filter(
    (m) =>
      m.stage !== 'group' &&
      m.stage !== 'third_place' &&
      m.played &&
      (m.home_team_id === teamId || m.away_team_id === teamId),
  );

  for (const m of knockoutMatches) {
    const isHome = m.home_team_id === teamId;
    const gf = isHome ? m.home_score : m.away_score;
    const ga = isHome ? m.away_score : m.home_score;
    const diff = gf - ga;

    let isWinner;
    if (m.result_type === 'penalties') {
      isWinner = m.penalty_winner_id === teamId;
    } else {
      isWinner = diff > 0;
    }

    if (m.stage === 'final') {
      if (m.result_type === 'regular') {
        points += isWinner ? 3 : 0;
      } else if (m.result_type === 'extra_time') {
        points += isWinner ? 2 : 0;
      } else if (m.result_type === 'penalties') {
        points += 1; // both get 1
      }
      points += isWinner ? 10 : 6; // champion or runner-up
    } else {
      if (m.result_type === 'regular') {
        points += isWinner ? 3 : 0;
        if (isWinner) points += 1;
        if (Math.abs(diff) >= 3) {
          points += diff > 0 ? 1 : -1;
        }
      } else if (m.result_type === 'extra_time') {
        points += isWinner ? 2 : 0;
        if (isWinner) points += 1;
      } else if (m.result_type === 'penalties') {
        points += 1;
        if (isWinner) points += 1;
      }
    }
  }

  // === 3RD PLACE MATCH ===
  const thirdMatch = allMatches.find(
    (m) =>
      m.stage === 'third_place' &&
      m.played &&
      (m.home_team_id === teamId || m.away_team_id === teamId),
  );
  if (thirdMatch) {
    let isWinner;
    if (thirdMatch.result_type === 'penalties') {
      isWinner = thirdMatch.penalty_winner_id === teamId;
    } else {
      const isHome = thirdMatch.home_team_id === teamId;
      const gf = isHome ? thirdMatch.home_score : thirdMatch.away_score;
      const ga = isHome ? thirdMatch.away_score : thirdMatch.home_score;
      isWinner = gf > ga;
    }
    points += isWinner ? 3 : 0; // Only bonus, no match points
  }

  // === TOP SCORER BONUS ===
  const finalMatch = allMatches.find((m) => m.stage === 'final' && m.played);
  if (finalMatch && finalMatch.top_scorer_team_id === teamId) {
    points += 2;
  }

  return points;
}

function getPlayerTeams(playerCode) {
  return allSelections
    .filter(
      (s) => s.player_code === playerCode && s.group_code === CONFIG.GROUP_CODE,
    )
    .map((s) => TEAMS.find((t) => t.id === s.team_id))
    .filter(Boolean);
}

function getPlayerSpent(playerCode) {
  return getPlayerTeams(playerCode).reduce((sum, t) => sum + t.cost, 0);
}

function getPlayerTotalPoints(playerCode) {
  const teams = getPlayerTeams(playerCode);
  return teams.reduce((sum, t) => sum + calculateTeamGamePoints(t.id), 0);
}

function getTeamOwners(teamId) {
  return allSelections
    .filter((s) => s.team_id === teamId && s.group_code === CONFIG.GROUP_CODE)
    .map((s) => PLAYERS.find((p) => p.code === s.player_code))
    .filter(Boolean);
}

function getTeamOwnerCount(teamId) {
  return allSelections.filter(
    (s) => s.team_id === teamId && s.group_code === CONFIG.GROUP_CODE,
  ).length;
}

// ========== GROUP MATCH GENERATION ==========
function generateGroupMatches(groupName) {
  const teams = getGroupTeams(groupName);
  if (teams.length !== 4) return [];
  // Round-robin: 6 matches
  const pairs = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      pairs.push([teams[i], teams[j]]);
    }
  }
  return pairs.map((p, idx) => ({
    id: `G-${groupName}-${idx + 1}`,
    stage: 'group',
    group_name: groupName,
    home_team_id: p[0].id,
    away_team_id: p[1].id,
    home_score: null,
    away_score: null,
    result_type: 'regular',
    played: false,
  }));
}

function getAllGroupMatchTemplates() {
  const templates = [];
  for (const g of GROUP_NAMES) {
    templates.push(...generateGroupMatches(g));
  }
  return templates;
}

// ========== UI RENDERING ==========
const $ = (id) => document.getElementById(id);

function showView(viewName) {
  document
    .querySelectorAll('.view')
    .forEach((v) => v.classList.remove('active'));
  const view = $(`view-${viewName}`);
  if (view) view.classList.add('active');

  document
    .querySelectorAll('.nav-btn')
    .forEach((b) => b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-btn[data-view="${viewName}"]`);
  if (navBtn) navBtn.classList.add('active');

  if (viewName === 'login') {
    $('app-header').style.display = 'none';
    $('app-nav').style.display = 'none';
  } else {
    $('app-header').style.display = 'flex';
    $('app-nav').style.display = 'flex';
  }

  // Render view content
  switch (viewName) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'teams':
      renderTeamSelection();
      break;
    case 'matches':
      renderMatches();
      break;
    case 'rules':
      renderRules();
      break;
    case 'admin':
      renderAdmin();
      break;
  }
}

function renderHeader() {
  $('header-player-name').textContent =
    `${currentPlayer.avatar} ${currentPlayer.name}`;
  $('header-budget').textContent =
    `${CONFIG.BUDGET - getPlayerSpent(currentPlayer.code)} pts`;
}

// ---- DASHBOARD ----
function renderDashboard() {
  renderHeader();
  const container = $('dashboard-content');

  const leaderboard = PLAYERS.map((p) => ({
    player: p,
    points: getPlayerTotalPoints(p.code),
    teams: getPlayerTeams(p.code),
    spent: getPlayerSpent(p.code),
  })).sort((a, b) => b.points - a.points);

  let html = '<h2 class="section-title">Clasificacion</h2>';
  html += '<div class="leaderboard">';
  leaderboard.forEach((entry, idx) => {
    const medal =
      idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}.`;
    const isMe = entry.player.code === currentPlayer.code;
    html += `
      <div class="leaderboard-row ${isMe ? 'is-me' : ''}">
        <div class="lb-rank">${medal}</div>
        <div class="lb-info">
          <div class="lb-name">${entry.player.avatar} ${entry.player.name}</div>
          <div class="lb-teams">${entry.teams.map((t) => t.flag).join(' ') || '<span class="muted">Sin equipos</span>'}</div>
        </div>
        <div class="lb-points">${entry.points} <small>pts</small></div>
      </div>`;
  });
  html += '</div>';

  // My teams detail
  const myTeams = getPlayerTeams(currentPlayer.code);
  if (myTeams.length > 0) {
    html += '<h2 class="section-title">Mis Equipos</h2>';
    html += '<div class="my-teams-grid">';
    for (const team of myTeams) {
      const pts = calculateTeamGamePoints(team.id);
      html += `
        <div class="team-card-mini">
          <div class="tcm-flag">${team.flag}</div>
          <div class="tcm-name">${team.name}</div>
          <div class="tcm-group">Grupo ${team.group}</div>
          <div class="tcm-points ${pts > 0 ? 'positive' : pts < 0 ? 'negative' : ''}">${pts > 0 ? '+' : ''}${pts} pts</div>
        </div>`;
    }
    html += '</div>';
  }

  // Group standings summary
  html += '<h2 class="section-title">Grupos</h2>';
  html += '<div class="groups-grid">';
  for (const g of GROUP_NAMES) {
    const standings = calculateGroupStandings(g);
    html += `<div class="group-card">
      <div class="group-header">Grupo ${g}</div>
      <div class="group-table">`;
    for (const s of standings) {
      const owned = getTeamOwners(s.team.id);
      html += `<div class="group-row">
        <span class="gr-team">${s.team.flag} ${s.team.name}</span>
        <span class="gr-record">${s.played > 0 ? `${s.w}V ${s.d}E ${s.l}D` : '-'}</span>
        <span class="gr-pts">${s.pts}</span>
        <span class="gr-owners">${owned.map((o) => o.avatar).join('')}</span>
      </div>`;
    }
    html += '</div></div>';
  }
  html += '</div>';

  container.innerHTML = html;
}

// ---- TEAM SELECTION ----
function renderTeamSelection() {
  renderHeader();
  const container = $('teams-content');
  const spent = getPlayerSpent(currentPlayer.code);
  const remaining = CONFIG.BUDGET - spent;
  const myTeamIds = getPlayerTeams(currentPlayer.code).map((t) => t.id);

  let html = `
    <div class="budget-bar">
      <div class="budget-label">Presupuesto: <strong>${remaining}</strong> / ${CONFIG.BUDGET} pts</div>
      <div class="budget-track">
        <div class="budget-fill" style="width: ${(spent / CONFIG.BUDGET) * 100}%"></div>
      </div>
    </div>
    <div class="filter-bar">
      <select id="filter-group" onchange="renderTeamSelection()">
        <option value="">Todos los grupos</option>
        ${GROUP_NAMES.map((g) => `<option value="${g}">Grupo ${g}</option>`).join('')}
      </select>
      <select id="filter-sort" onchange="renderTeamSelection()">
        <option value="cost-desc">Precio: mayor a menor</option>
        <option value="cost-asc">Precio: menor a mayor</option>
        <option value="group">Por grupo</option>
      </select>
    </div>`;

  const filterGroup = $('filter-group')?.value || '';
  const filterSort = $('filter-sort')?.value || 'cost-desc';

  let filteredTeams = [...TEAMS];
  if (filterGroup)
    filteredTeams = filteredTeams.filter((t) => t.group === filterGroup);

  if (filterSort === 'cost-desc') filteredTeams.sort((a, b) => b.cost - a.cost);
  else if (filterSort === 'cost-asc')
    filteredTeams.sort((a, b) => a.cost - b.cost);
  else
    filteredTeams.sort(
      (a, b) => a.group.localeCompare(b.group) || b.cost - a.cost,
    );

  html += '<div class="teams-list">';
  for (const team of filteredTeams) {
    const owners = getTeamOwners(team.id);
    const ownerCount = getTeamOwnerCount(team.id);
    const isMine = myTeamIds.includes(team.id);
    const isFull = ownerCount >= CONFIG.MAX_OWNERS_PER_TEAM && !isMine;
    const cantAfford = team.cost > remaining && !isMine;
    const disabled = isFull || cantAfford;
    const gamePts = calculateTeamGamePoints(team.id);

    html += `
      <div class="team-card ${isMine ? 'owned' : ''} ${disabled ? 'disabled' : ''}" 
           ${!disabled || isMine ? `onclick="toggleTeam(${team.id})"` : ''}>
        <div class="tc-flag">${team.flag}</div>
        <div class="tc-info">
          <div class="tc-name">${team.name}</div>
          <div class="tc-group">Grupo ${team.group}</div>
          <div class="tc-owners">${owners.map((o) => `<span class="owner-tag">${o.avatar} ${o.name}</span>`).join('') || `<span class="muted">${ownerCount}/${CONFIG.MAX_OWNERS_PER_TEAM} elegido</span>`}</div>
        </div>
        <div class="tc-right">
          <div class="tc-cost">${team.cost} <small>pts</small></div>
          ${gamePts !== 0 ? `<div class="tc-gamepts ${gamePts > 0 ? 'positive' : 'negative'}">${gamePts > 0 ? '+' : ''}${gamePts}</div>` : ''}
          <div class="tc-status">${isMine ? '✓' : isFull ? '🔒' : cantAfford ? '💸' : ''}</div>
        </div>
      </div>`;
  }
  html += '</div>';

  container.innerHTML = html;

  // Restore filter values
  if (filterGroup) $('filter-group').value = filterGroup;
  if (filterSort) $('filter-sort').value = filterSort;
}

async function toggleTeam(teamId) {
  if (!currentPlayer) return;
  const myTeamIds = getPlayerTeams(currentPlayer.code).map((t) => t.id);

  try {
    if (myTeamIds.includes(teamId)) {
      await Store.deselectTeam(currentPlayer.code, teamId);
    } else {
      const team = TEAMS.find((t) => t.id === teamId);
      const remaining = CONFIG.BUDGET - getPlayerSpent(currentPlayer.code);
      if (team.cost > remaining) return alert('No tienes suficientes puntos');
      if (getTeamOwnerCount(teamId) >= CONFIG.MAX_OWNERS_PER_TEAM)
        return alert('Este equipo ya tiene el maximo de propietarios');
      await Store.selectTeam(currentPlayer.code, teamId);
    }
    renderTeamSelection();
  } catch (err) {
    alert('Error: ' + (err.message || err));
  }
}

// ---- MATCHES ----
function renderMatches() {
  renderHeader();
  const container = $('matches-content');
  let html = '';

  // Group stage
  html += '<h2 class="section-title">Fase de Grupos</h2>';
  for (const g of GROUP_NAMES) {
    const matches = allMatches.filter(
      (m) => m.stage === 'group' && m.group_name === g,
    );
    if (matches.length === 0) continue;

    html += `<div class="match-group-header">Grupo ${g}</div>`;
    for (const m of matches) {
      const home = TEAMS.find((t) => t.id === m.home_team_id);
      const away = TEAMS.find((t) => t.id === m.away_team_id);
      if (!home || !away) continue;

      html += `
        <div class="match-row ${m.played ? 'played' : 'upcoming'}">
          <div class="mr-team mr-home">${home.flag} ${home.name}</div>
          <div class="mr-score">${m.played ? `${m.home_score} - ${m.away_score}` : 'vs'}</div>
          <div class="mr-team mr-away">${away.name} ${away.flag}</div>
        </div>`;
    }
  }

  // Knockout
  const knockoutStages = [
    { key: 'round32', label: 'Dieciseisavos' },
    { key: 'round16', label: 'Octavos de Final' },
    { key: 'quarter', label: 'Cuartos de Final' },
    { key: 'semi', label: 'Semifinales' },
    { key: 'third_place', label: 'Tercer y Cuarto Puesto' },
    { key: 'final', label: 'FINAL' },
  ];

  for (const stage of knockoutStages) {
    const matches = allMatches.filter((m) => m.stage === stage.key);
    if (matches.length === 0) continue;

    html += `<h2 class="section-title">${stage.label}</h2>`;
    for (const m of matches) {
      const home = TEAMS.find((t) => t.id === m.home_team_id);
      const away = TEAMS.find((t) => t.id === m.away_team_id);
      if (!home || !away) continue;

      let extra = '';
      if (m.played && m.result_type === 'extra_time')
        extra = '<span class="match-extra">(Prorroga)</span>';
      if (m.played && m.result_type === 'penalties')
        extra = '<span class="match-extra">(Penaltis)</span>';

      html += `
        <div class="match-row ${m.played ? 'played' : 'upcoming'} ${stage.key === 'final' ? 'final-match' : ''}">
          <div class="mr-team mr-home">${home.flag} ${home.name}</div>
          <div class="mr-score">${m.played ? `${m.home_score} - ${m.away_score}` : 'vs'} ${extra}</div>
          <div class="mr-team mr-away">${away.name} ${away.flag}</div>
        </div>`;
    }
  }

  if (allMatches.length === 0) {
    html +=
      '<div class="empty-state">Aun no hay partidos registrados. El admin debe crearlos desde el panel de administracion.</div>';
  }

  container.innerHTML = html;
}

// ---- RULES ----
function renderRules() {
  renderHeader();
  const container = $('rules-content');
  container.innerHTML = `
    <div class="pergamino">
      <div class="pergamino-header">
        <div class="pergamino-icon">📜</div>
        <h2>Pergamino Sagrado</h2>
        <p class="pergamino-sub">Porra Mundial 2026 - USA, Mexico & Canada</p>
      </div>

      <div class="pergamino-section">
        <h3>🏆 PREMIOS</h3>
        <div class="premio premio-gold">
          <span class="premio-pos">1º</span>
          <span class="premio-desc">KEBAB GRATIS invitado por los perdedores + gloria eterna</span>
        </div>
        <div class="premio premio-silver">
          <span class="premio-pos">2º</span>
          <span class="premio-desc">Palmadita en la espalda y el respeto del grupo</span>
        </div>
        <div class="premio premio-bronze">
          <span class="premio-pos">Ultimo</span>
          <span class="premio-desc">+50 puntos para el tonto del año 😈</span>
        </div>
      </div>

      <div class="pergamino-section">
        <h3>📋 1. ELECCION DE EQUIPOS</h3>
        <ul>
          <li>Cada participante dispone de <strong>30 puntos AIBA</strong> para canjear por equipos.</li>
          <li>No hay limite de equipos mientras no se sobrepasen los 30 puntos.</li>
          <li><strong>Maximo 2 jugadores</strong> pueden elegir el mismo equipo.</li>
          <li>Si no usas todos tus puntos, puedes hacerlo en segunda ronda (pero no sumaras puntos de fase de grupos ya disputados).</li>
        </ul>
      </div>

      <div class="pergamino-section">
        <h3>⚽ 2. PRIMERA FASE (Grupos)</h3>
        <div class="rule-table">
          <div class="rule-row"><span>Victoria</span><span class="pts-pos">+3 pts</span></div>
          <div class="rule-row"><span>Empate</span><span class="pts-pos">+1 pt</span></div>
          <div class="rule-row"><span>Derrota</span><span class="pts-neu">0 pts</span></div>
          <div class="rule-row"><span>Victoria por 3+ goles</span><span class="pts-pos">+1 pt extra</span></div>
          <div class="rule-row"><span>Derrota por 3+ goles</span><span class="pts-neg">-1 pt</span></div>
        </div>
        <h4>Bonus por posicion en el grupo:</h4>
        <div class="rule-table">
          <div class="rule-row"><span>1º de grupo</span><span class="pts-pos">+3 pts</span></div>
          <div class="rule-row"><span>2º de grupo</span><span class="pts-pos">+2 pts</span></div>
          <div class="rule-row"><span>Mejor 3º clasificado</span><span class="pts-pos">+1 pt</span></div>
          <div class="rule-row"><span>3º no clasificado</span><span class="pts-neu">0 pts</span></div>
          <div class="rule-row"><span>Ultimo de grupo</span><span class="pts-neg">-1 pt</span></div>
          <div class="rule-row"><span>Ultimo con 0 puntos</span><span class="pts-neg">-3 pts</span></div>
        </div>
      </div>

      <div class="pergamino-section">
        <h3>🥊 3. SEGUNDA FASE (Eliminatorias)</h3>
        <div class="rule-table">
          <div class="rule-row"><span>Victoria en 90 min</span><span class="pts-pos">+3 pts + 1 (avance)</span></div>
          <div class="rule-row"><span>Victoria en prorroga</span><span class="pts-pos">+2 pts + 1 (avance)</span></div>
          <div class="rule-row"><span>Victoria en penaltis</span><span class="pts-pos">+1 pt + 1 (avance)</span></div>
          <div class="rule-row"><span>Derrota en penaltis</span><span class="pts-neu">+1 pt</span></div>
          <div class="rule-row"><span>Goleada 3+ goles</span><span class="pts-pos">+1/-1 pt extra</span></div>
        </div>
      </div>

      <div class="pergamino-section">
        <h3>🏅 4. FASE FINAL</h3>
        <div class="rule-table">
          <div class="rule-row highlight-gold"><span>Campeon</span><span class="pts-pos">+10 pts bonus</span></div>
          <div class="rule-row highlight-silver"><span>Subcampeon</span><span class="pts-pos">+6 pts bonus</span></div>
          <div class="rule-row highlight-bronze"><span>3º clasificado</span><span class="pts-pos">+3 pts bonus</span></div>
          <div class="rule-row"><span>4º clasificado</span><span class="pts-neu">0 pts</span></div>
          <div class="rule-row"><span>Equipo del maximo goleador</span><span class="pts-pos">+2 pts bonus</span></div>
        </div>
        <p class="rule-note">* En la final, los puntos del partido se contabilizan como en eliminatorias. En el partido de 3º/4º puesto solo se aplica el bonus, no se suman puntos por resultado.</p>
      </div>

      <div class="pergamino-section">
        <h3>💰 VALOR DE LOS EQUIPOS</h3>
        <div class="teams-value-grid">
          ${[...TEAMS]
            .sort((a, b) => b.cost - a.cost)
            .map(
              (t, i) =>
                `<div class="tv-row"><span class="tv-rank">${i + 1}</span><span class="tv-team">${t.flag} ${t.name}</span><span class="tv-cost">${t.cost}</span></div>`,
            )
            .join('')}
        </div>
      </div>

      <div class="pergamino-footer">
        <p>Que gane el mejor... o el mas suertudo 🍀</p>
      </div>
    </div>`;
}

// ---- ADMIN ----
function renderAdmin() {
  renderHeader();
  const container = $('admin-content');

  if (!isAdmin()) {
    container.innerHTML =
      '<div class="empty-state">Solo los administradores pueden acceder a esta seccion.</div>';
    return;
  }

  let html = '<h2 class="section-title">Panel de Administracion</h2>';

  // Auto-sync + generate buttons
  html += `
    <div class="admin-section">
      <h3>Partidos y Resultados</h3>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="generateAllMatches()">Generar partidos de grupos</button>
        <button class="btn btn-primary" onclick="syncResults()" style="background:var(--gold);color:#000;">Sincronizar resultados (API)</button>
      </div>
      <p class="rule-note" style="margin-top:8px;">La sincronizacion busca resultados en openfootball (se actualiza durante el torneo). Tambien puedes introducir resultados manualmente abajo.</p>
    </div>`;

  // Match result entry
  html += `
    <div class="admin-section">
      <h3>Registrar Resultado</h3>
      <select id="admin-match-select" onchange="onAdminMatchSelect()">
        <option value="">-- Selecciona un partido --</option>`;

  // Group matches
  for (const g of GROUP_NAMES) {
    const matches = allMatches.filter(
      (m) => m.stage === 'group' && m.group_name === g,
    );
    if (matches.length > 0) {
      html += `<optgroup label="Grupo ${g}">`;
      for (const m of matches) {
        const home = TEAMS.find((t) => t.id === m.home_team_id);
        const away = TEAMS.find((t) => t.id === m.away_team_id);
        if (!home || !away) continue;
        const played = m.played ? ' ✓' : '';
        html += `<option value="${m.id}">${home.name} vs ${away.name}${played}</option>`;
      }
      html += '</optgroup>';
    }
  }

  // Knockout matches
  const knockoutLabels = {
    round32: 'Dieciseisavos',
    round16: 'Octavos',
    quarter: 'Cuartos',
    semi: 'Semis',
    third_place: '3er puesto',
    final: 'Final',
  };
  for (const [stage, label] of Object.entries(knockoutLabels)) {
    const matches = allMatches.filter((m) => m.stage === stage);
    if (matches.length > 0) {
      html += `<optgroup label="${label}">`;
      for (const m of matches) {
        const home = TEAMS.find((t) => t.id === m.home_team_id);
        const away = TEAMS.find((t) => t.id === m.away_team_id);
        if (!home || !away) continue;
        const played = m.played ? ' ✓' : '';
        html += `<option value="${m.id}">${home.name} vs ${away.name}${played}</option>`;
      }
      html += '</optgroup>';
    }
  }

  html += `</select>
      <div id="admin-match-form" style="display:none">
        <div class="admin-form-grid">
          <div class="admin-field">
            <label id="admin-home-label">Local</label>
            <input type="number" id="admin-home-score" min="0" value="0">
          </div>
          <div class="admin-field">
            <label id="admin-away-label">Visitante</label>
            <input type="number" id="admin-away-score" min="0" value="0">
          </div>
          <div class="admin-field">
            <label>Tipo de resultado</label>
            <select id="admin-result-type">
              <option value="regular">Tiempo reglamentario</option>
              <option value="extra_time">Prorroga</option>
              <option value="penalties">Penaltis</option>
            </select>
          </div>
          <div class="admin-field" id="admin-penalty-field" style="display:none">
            <label>Ganador penaltis</label>
            <select id="admin-penalty-winner"></select>
          </div>
        </div>
        <button class="btn btn-primary" onclick="saveMatchResult()">Guardar Resultado</button>
      </div>
    </div>`;

  // Knockout match creation
  html += `
    <div class="admin-section">
      <h3>Crear Partido Eliminatoria</h3>
      <div class="admin-form-grid">
        <div class="admin-field">
          <label>Fase</label>
          <select id="admin-ko-stage">
            <option value="round32">Dieciseisavos</option>
            <option value="round16">Octavos</option>
            <option value="quarter">Cuartos</option>
            <option value="semi">Semifinales</option>
            <option value="third_place">3er/4º puesto</option>
            <option value="final">Final</option>
          </select>
        </div>
        <div class="admin-field">
          <label>Local</label>
          <select id="admin-ko-home">
            ${TEAMS.map((t) => `<option value="${t.id}">${t.flag} ${t.name}</option>`).join('')}
          </select>
        </div>
        <div class="admin-field">
          <label>Visitante</label>
          <select id="admin-ko-away">
            ${TEAMS.map((t) => `<option value="${t.id}">${t.flag} ${t.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <button class="btn btn-primary" onclick="createKnockoutMatch()">Crear Partido</button>
    </div>`;

  // Qualified thirds management
  html += `
    <div class="admin-section">
      <h3>Mejores Terceros Clasificados</h3>
      <p class="rule-note">Marca los 8 mejores terceros que se clasifican para dieciseisavos.</p>
      <div class="thirds-grid">`;
  for (const g of GROUP_NAMES) {
    const standings = calculateGroupStandings(g);
    const third = standings.find((s) => s.position === 3);
    if (!third) continue;
    const isQualified = isThirdQualified(third.team.id);
    html += `
      <label class="third-check ${isQualified ? 'qualified' : ''}">
        <input type="checkbox" ${isQualified ? 'checked' : ''} onchange="toggleThirdQualified(${third.team.id}, '${g}', this.checked)">
        <span>${third.team.flag} ${third.team.name} (${g}) - ${third.pts}pts</span>
      </label>`;
  }
  html += '</div></div>';

  // Top scorer
  html += `
    <div class="admin-section">
      <h3>Maximo Goleador</h3>
      <p class="rule-note">Selecciona el equipo del maximo goleador cuando termine el torneo.</p>
      <select id="admin-top-scorer" onchange="saveTopScorer(this.value)">
        <option value="">-- Sin definir --</option>
        ${[...TEAMS]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((t) => `<option value="${t.id}">${t.flag} ${t.name}</option>`)
          .join('')}
      </select>
    </div>`;

  // Admin reset zone
  html += `
    <div class="admin-section" style="border-color:var(--negative);">
      <h3 style="color:var(--negative);">Zona de Reset</h3>
      <p class="rule-note">Borrar selecciones de un jugador o resetear todo.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
        <select id="admin-reset-player">
          ${PLAYERS.map((p) => `<option value="${p.code}">${p.avatar} ${p.name}</option>`).join('')}
        </select>
        <button class="btn" style="border:1px solid var(--negative);color:var(--negative);" onclick="resetPlayer()">Borrar selecciones de este jugador</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn" style="border:1px solid var(--negative);color:var(--negative);" onclick="resetAllSelectionsAdmin()">Borrar TODAS las selecciones</button>
        <button class="btn" style="border:1px solid var(--negative);color:var(--negative);" onclick="resetAllMatchesAdmin()">Borrar TODOS los partidos</button>
      </div>
    </div>`;

  container.innerHTML = html;
}

async function resetPlayer() {
  const code = $('admin-reset-player').value;
  const player = PLAYERS.find((p) => p.code === code);
  if (!confirm('Borrar todas las selecciones de ' + player.name + '?')) return;
  await Store.resetPlayerSelections(code);
  alert('Selecciones de ' + player.name + ' borradas');
  renderAdmin();
}

async function resetAllSelectionsAdmin() {
  if (!confirm('BORRAR TODAS las selecciones de TODOS los jugadores?')) return;
  await Store.resetAllSelections();
  alert('Todas las selecciones borradas');
  renderAdmin();
}

async function resetAllMatchesAdmin() {
  if (!confirm('BORRAR TODOS los partidos y resultados?')) return;
  await Store.resetAllMatches();
  alert('Todos los partidos borrados');
  renderAdmin();
}

function onAdminMatchSelect() {
  const matchId = $('admin-match-select').value;
  const form = $('admin-match-form');
  if (!matchId) {
    form.style.display = 'none';
    return;
  }

  const match = allMatches.find((m) => m.id === matchId);
  if (!match) return;

  const home = TEAMS.find((t) => t.id === match.home_team_id);
  const away = TEAMS.find((t) => t.id === match.away_team_id);

  $('admin-home-label').textContent = `${home.flag} ${home.name}`;
  $('admin-away-label').textContent = `${away.flag} ${away.name}`;
  $('admin-home-score').value = match.home_score || 0;
  $('admin-away-score').value = match.away_score || 0;
  $('admin-result-type').value = match.result_type || 'regular';

  const penaltySelect = $('admin-penalty-winner');
  penaltySelect.innerHTML = `
    <option value="${home.id}">${home.flag} ${home.name}</option>
    <option value="${away.id}">${away.flag} ${away.name}</option>`;
  if (match.penalty_winner_id) penaltySelect.value = match.penalty_winner_id;

  $('admin-result-type').onchange = () => {
    $('admin-penalty-field').style.display =
      $('admin-result-type').value === 'penalties' ? 'block' : 'none';
  };
  $('admin-penalty-field').style.display =
    match.result_type === 'penalties' ? 'block' : 'none';

  form.style.display = 'block';
}

async function saveMatchResult() {
  const matchId = $('admin-match-select').value;
  if (!matchId) return;

  const match = allMatches.find((m) => m.id === matchId);
  const updated = {
    ...match,
    home_score: parseInt($('admin-home-score').value),
    away_score: parseInt($('admin-away-score').value),
    result_type: $('admin-result-type').value,
    penalty_winner_id:
      $('admin-result-type').value === 'penalties'
        ? parseInt($('admin-penalty-winner').value)
        : null,
    played: true,
  };

  try {
    await Store.saveMatch(updated);
    alert('Resultado guardado');
    renderAdmin();
  } catch (err) {
    alert('Error: ' + err.message);
  }
}

async function generateAllMatches() {
  const templates = getAllGroupMatchTemplates();
  const existing = allMatches.filter((m) => m.stage === 'group');
  if (existing.length > 0) {
    if (
      !confirm(
        'Ya existen partidos de grupo. ¿Regenerar? (Se perderan resultados)',
      )
    )
      return;
  }

  try {
    for (const tmpl of templates) {
      await Store.saveMatch(tmpl);
    }
    alert(`${templates.length} partidos generados`);
    renderAdmin();
  } catch (err) {
    alert('Error: ' + err.message);
  }
}

async function createKnockoutMatch() {
  const stage = $('admin-ko-stage').value;
  const homeId = parseInt($('admin-ko-home').value);
  const awayId = parseInt($('admin-ko-away').value);

  if (homeId === awayId) return alert('Selecciona equipos diferentes');

  const existingKO = allMatches.filter((m) => m.stage === stage);
  const matchNum = existingKO.length + 1;
  const id = `KO-${stage}-${matchNum}`;

  try {
    await Store.saveMatch({
      id,
      stage,
      group_name: null,
      home_team_id: homeId,
      away_team_id: awayId,
      home_score: null,
      away_score: null,
      result_type: 'regular',
      played: false,
    });
    alert('Partido creado');
    renderAdmin();
  } catch (err) {
    alert('Error: ' + err.message);
  }
}

async function toggleThirdQualified(teamId, groupName, checked) {
  if (checked) {
    const current = qualifiedThirds.filter((t) => t.team_id !== teamId);
    current.push({ team_id: teamId, group_name: groupName });
    if (current.length > 8) {
      alert('Maximo 8 mejores terceros');
      renderAdmin();
      return;
    }
    await Store.saveQualifiedThirds(current);
  } else {
    await Store.saveQualifiedThirds(
      qualifiedThirds.filter((t) => t.team_id !== teamId),
    );
  }
  renderAdmin();
}

async function syncResults() {
  try {
    const synced = await fetchAndSyncResults();
    await Store.loadMatches();
    if (synced > 0) {
      alert(`${synced} resultado(s) sincronizado(s)`);
    } else {
      alert('No hay resultados nuevos disponibles');
    }
    renderAdmin();
  } catch (e) {
    alert('Error al sincronizar: ' + e.message);
  }
}

async function saveTopScorer(teamId) {
  const finalMatch = allMatches.find((m) => m.stage === 'final');
  if (finalMatch) {
    finalMatch.top_scorer_team_id = teamId ? parseInt(teamId) : null;
    await Store.saveMatch(finalMatch);
  }
}

// ========== AUTO-FETCH RESULTS ==========
function resolveTeamId(apiName) {
  if (!apiName) return null;
  // Direct match
  if (API_NAME_MAP[apiName]) return API_NAME_MAP[apiName];
  // Try case-insensitive
  const lower = apiName.toLowerCase();
  for (const [key, id] of Object.entries(API_NAME_MAP)) {
    if (key.toLowerCase() === lower) return id;
  }
  return null;
}

function apiGroupToLetter(groupStr) {
  // "Group A" -> "A"
  return groupStr ? groupStr.replace('Group ', '') : null;
}

async function fetchAndSyncResults() {
  try {
    const resp = await fetch(OPENFOOTBALL_URL);
    if (!resp.ok) throw new Error('Failed to fetch');
    const data = await resp.json();

    let synced = 0;

    // ---- GROUP STAGE ----
    for (const m of data.matches) {
      if (!m.group || !m.score || !m.score.ft) continue;
      const score1 = m.score.ft[0];
      const score2 = m.score.ft[1];

      const homeId = resolveTeamId(m.team1);
      const awayId = resolveTeamId(m.team2);
      if (!homeId || !awayId) {
        console.warn(
          `No se pudo resolver equipo: ${m.team1} (${homeId}) vs ${m.team2} (${awayId})`,
        );
        continue;
      }

      const existing = allMatches.find(
        (em) =>
          em.stage === 'group' &&
          ((em.home_team_id === homeId && em.away_team_id === awayId) ||
            (em.home_team_id === awayId && em.away_team_id === homeId)),
      );

      if (!existing) {
        console.warn(
          `No se encontró partido pregenerado para ${m.team1} vs ${m.team2} (grupo ${m.group}). Pulsa "Generar partidos de grupos" primero.`,
        );
        continue;
      }

      if (existing.played) continue;

      const sameOrder = existing.home_team_id === homeId;
      const matchObj = {
        ...existing,
        home_score: sameOrder ? score1 : score2,
        away_score: sameOrder ? score2 : score1,
        result_type: 'regular',
        played: true,
        match_date: m.date,
      };

      await Store.saveMatch(matchObj);
      synced++;
    }

    // ---- KNOCKOUT STAGE ----
    for (const m of data.matches) {
      if (m.group) continue;
      if (!m.score || !m.score.ft) continue;
      const score1 = m.score.ft[0];
      const score2 = m.score.ft[1];

      const homeId = resolveTeamId(m.team1);
      const awayId = resolveTeamId(m.team2);
      if (!homeId || !awayId) continue;

      let stage = 'round32';
      if (m.round && m.round.includes('16')) stage = 'round16';
      else if (m.round && m.round.includes('Quarter')) stage = 'quarter';
      else if (m.round && m.round.includes('Semi')) stage = 'semi';
      else if (m.round && m.round.toLowerCase().includes('third'))
        stage = 'third_place';
      else if (
        m.round &&
        m.round.includes('Final') &&
        !m.round.includes('Semi') &&
        !m.round.includes('Quarter')
      )
        stage = 'final';

      const existing = allMatches.find(
        (em) =>
          em.stage === stage &&
          ((em.home_team_id === homeId && em.away_team_id === awayId) ||
            (em.home_team_id === awayId && em.away_team_id === homeId)),
      );

      if (!existing) {
        console.warn(
          `No se encontró partido eliminatoria pregenerado para ${m.team1} vs ${m.team2} (${stage}). Créalo primero en "Crear Partido Eliminatoria".`,
        );
        continue;
      }

      if (existing.played) continue;

      const sameOrder = existing.home_team_id === homeId;

      let resultType = 'regular';
      if (m.score.p) resultType = 'penalties';
      else if (m.score.et) resultType = 'extra_time';

      let penaltyWinner = null;
      if (resultType === 'penalties') {
        const homeWonPens = m.score.p[0] > m.score.p[1];
        penaltyWinner = sameOrder
          ? homeWonPens
            ? homeId
            : awayId
          : homeWonPens
            ? awayId
            : homeId;
      }

      const matchObj = {
        ...existing,
        home_score: sameOrder ? score1 : score2,
        away_score: sameOrder ? score2 : score1,
        result_type: resultType,
        penalty_winner_id: penaltyWinner,
        played: true,
        match_date: m.date,
      };

      await Store.saveMatch(matchObj);
      synced++;
    }

    return synced;
  } catch (e) {
    console.warn('Auto-fetch failed:', e);
    return 0;
  }
}

// ========== INITIALIZATION ==========
async function init() {
  try {
    initSupabase();
  } catch (e) {
    console.warn('Supabase init failed, using localStorage:', e);
  }

  try {
    await Store.loadSelections();
    await Store.loadMatches();
    await Store.loadQualifiedThirds();
    // Auto-fetch results from openfootball
    await fetchAndSyncResults();
    await Store.loadMatches(); // Reload after sync
  } catch (e) {
    console.warn('Error loading data:', e);
  }

  // Setup nav
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });

  $('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const groupCode = $('input-group-code').value.trim();
    const playerCode = $('input-player-code').value.trim();
    const result = login(groupCode, playerCode);
    if (result.error) {
      $('login-error').textContent = result.error;
      $('login-error').style.display = 'block';
    } else {
      $('login-error').style.display = 'none';
      // Reload data after login
      try {
        await Store.loadSelections();
        await Store.loadMatches();
        await Store.loadQualifiedThirds();
      } catch (e) {
        console.warn(e);
      }
      showView('dashboard');
    }
  });

  $('btn-logout').addEventListener('click', logout);

  // Auto-refresh data periodically
  setInterval(async () => {
    if (currentPlayer) {
      try {
        await Store.loadSelections();
        await Store.loadMatches();
        await Store.loadQualifiedThirds();
      } catch (e) {
        console.warn(e);
      }
    }
  }, 30000);

  // Restore session or show login
  if (restoreSession()) {
    showView('dashboard');
  } else {
    showView('login');
  }
}

document.addEventListener('DOMContentLoaded', init);
