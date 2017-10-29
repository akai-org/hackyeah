module.exports = (db) => {
  db.push('/app/title', 'Happy Helping');
  db.push('/app/stats/first', 20000);
  db.push('/app/stats/second', 2500);
  db.push('/app/stats/third', 6000);
  db.push('/app/users/company', {
    login: 'companyUser',
    password: 'companyPassword'
  });
  db.push('/app/users/individual', {
    login: 'privateUser',
    password: 'privatePassword'
  });
  db.push('/app/users/organization', {
    login: 'organizationUser',
    password: 'organizationPassword'
  });
};