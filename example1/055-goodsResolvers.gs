/**
 * Resolver methods for goods. Property 'resolver' on goods should
 * correspond to a method defined here.
 */

modules.example1.resolvers.goods = {};

modules.example1.resolvers.goods.attackBooster = function(agent) {
  agent.trackChange('attackBoosters', 1);
  log(agent.id + ' bought an attack boster.', 'example');
}
modules.example1.resolvers.goods.healing = function(agent) {
  agent.trackChange('hitPoints', 2);
  log(agent.id + ' bought healing.', 'example');
}
