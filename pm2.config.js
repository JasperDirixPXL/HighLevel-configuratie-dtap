module.exports = {
  apps : [{
    name      : 'calcApp',
    script    : '/etc/opt/calcApp/server.js',
    node_args : '-r dotenv/config'
  }],
}
