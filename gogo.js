var $E = function(selector, filter){
  return (document.id(filter) || document).getElement(selector);
};

var $ES = function(selector, filter){
  return (document.id(filter) || document).getElements(selector);
};

Number.implement({
  decimalFormat: function(decimals)
  {
    return this.round(decimals).toFixed(decimals);
  }
});


// Element.alias({'dispose': 'remove', 'getLast': 'getLastChild'});

Element.implement({

  getText: function(){
    return this.get('text');
  },

  setText: function(text){
    return this.set('text', text);
  },

  setHTML: function(){
    return this.set('html', arguments);
  },
  
  getHTML: function(){
    return this.get('html');
  },

  getTag: function(){
    return this.get('tag');
  },
  
  setOpacity: function(op){
    return this.set('opacity', op);
  }
});

if(typeof Element.prototype.hasAttribute == 'undefined')
{
  Element.implement({
    hasAttribute: function(attribute) { var node = this.getAttributeNode(attribute);
    return !!(node && (node.specified || node.nodeValue)); }
  });
}

Event.keys = Event.Keys;


window.$MOO = $;

if(typeof document.id != 'function')
  document.id = $;