import site from "../../content/site.json";

// Single source of truth for the members counter shown across the site
// (home hero, become-partner, MembershipGoals). The values live in
// content/site.json so non-developers can update them (via the CMS or by
// editing that file on GitHub) without touching code.
export const MEMBERSHIP = {
  current: site.members.current,
  target: site.members.target,
};
