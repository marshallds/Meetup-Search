import request from 'superagent';

export function getMeetupGroups(zip) {
  const path = `https://api.meetup.com/find/groups?photo-host=public&zip=${zip}&page=21&radius=5&key=41a2b5c512da5850366d27962306a`

  return request.get(path)
    .set('Accept', 'application/json');
}
