module.exports = {
  apps : [{
    name      : 'calcApp',
    script    : '/etc/opt/app/calcApp/server.js',
    node_args : '-r dotenv/config'
  }],
}
