this["BaristaTemplates"] = this["BaristaTemplates"] || {};

this["BaristaTemplates"]["CMapBaseGrid"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n	";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_download\">\n			<font color=\"#0072B2\"><i class=\"icon-download\"></i> download table</font>\n		</p>\n	";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"padding-left: 8px; cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_slice\">\n			<font color=\"#0072B2\"><i class=\"icon-cogs\"></i> slice all data</font>\n		</p>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n		<div class=\"col-lg-8\"></div>\n	";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, depth0.legend, {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  if (stack1 = helpers.legend) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.legend; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n		";
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "\n			<span class=\"col-lg-8\">\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #E69F00\">SMC</span> Small Molecule Compound </p>\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #56B4E9\">KD</span> Knock Down </p>\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #D55E00\">OE</span> Over Expression </p>\n			</span>\n		";
  }

  buffer += "<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " backgrid-container\" height=\"300\">\n</div>\n<div class=\"row\">\n	<span class=\"col-lg-4\">\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_download, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_slice, {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</span>\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_legend, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["BaristaTemplates"]["CMapCard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"cmap-card-link\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"col-xs-12\" style=\"background-color: ";
  if (stack1 = helpers.fg_color) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fg_color; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"cmap-spacer-tiny\"></div>\n        <p class=\"hidden-xs cmap-center-text cmap-card-title-text\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <p class=\"visible-xs cmap-center-text cmap-card-title-text-small\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <div style=\"min-height:2px\"></div>\n      </div>\n\n    <div class=\"col-xs-12 cmap-card\">\n\n        <img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"col-xs-4 img-responsive\" alt=\"\">\n        <h4 class=\"hidden-xs col-xs-8 cmap-card-subtitle-text text-muted\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n        <p class=\"visible-xs col-xs-8 cmap-card-subtitle-text-small text-muted\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <div class=\"col-xs-12 cmap-spacer-tiny\"></div>\n    </div>\n  </div>\n</a>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapFooter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"pull-right cmap-footer-image\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"cmap-footer-image\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	";
  return buffer;
  }

  buffer += "<hr>\n<div class=\"row hidden-xs\">\n	<div class=\"col-sm-offset-1 col-sm-5 pull-left\">\n		<p>&copy ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.organization) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.organization; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " all rights reserved</p>\n		<p><a href=\"http://lincscloud.org/license/\">terms and conditions</a></p>\n	</div>\n	<div class=\"col-sm-5\">\n	";
  stack1 = helpers.each.call(depth0, depth0.logo_objects, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n\n<div class=\"row visible-xs\">\n	<div class=\"col-xs-12\">\n		<p class=\"cmap-center-text\">&copy ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.organization) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.organization; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " all rights reserved</p>\n		<p class=\"cmap-center-text\"><a href=\"http://www.lincscloud.org/license.html\">terms and conditions</a></p>\n	</div>\n	<div class=\"col-xs-12 cmap-center-text\">\n	";
  stack1 = helpers.each.call(depth0, depth0.logo_objects, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n<div class=\"cmap-spacer-medium\"></div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapHeader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n			             <span title=\"signout\" class=\"label cmap-header-signin-signout\" onclick=\"window.location.href = 'http://apps.lincscloud.org/signout';\">Sign Out</span>\n			         ";
  }

function program3(depth0,data) {
  
  
  return "\n			             <span title=\"signin\" class=\"label cmap-header-signin-signout\" onclick=\"window.location.href = 'http://apps.lincscloud.org/signin';\">Sign In</span>\n			         ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			         <p class=\"cmap-header-username pull-right\">";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </p>\n			     ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	                                     ";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	                                 ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n	                                     <i title=\"signout\" class=\"fa fa-sign-out cmap-header-link\" onclick=\"window.location.href = 'http://apps.lincscloud.org/signout';\"></i>\n	                                 ";
  }

function program11(depth0,data) {
  
  
  return "\n	                                     <i title=\"signin\" class=\"fa fa-sign-in cmap-header-link\" onclick=\"window.location.href = 'http://apps.lincscloud.org/signin';\"></i>\n	                                 ";
  }

  buffer += "<div class=\"cmap-header\">\n	<div id=\"spacer\" style=\"min-height:10px\"></div>\n\n	<!-- large screens -->\n	<div class=\"row hidden-xs\">\n		<!-- logo and navigation buttons -->\n		<div class=\"col-sm-offset-1 col-sm-3\">\n\n			<!-- logo -->\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<a href=\"http://lincscloud.org/\"><img class=\"cmap-header-image\" src=\"http://coreyflynn.github.io/Bellhop/img/lincscloud_logo.png\"></a>\n				</div>\n			</div>\n\n			<div class=\"row\">\n				<div class=\"cmap-spacer-medium\"></div>\n			</div>\n\n			<!-- navigation buttons -->\n			<div class=\"row\">\n				<div class=\"col-sm-12\">\n\n					<!-- apps sub-list -->\n					<i title=\"Apps\" class=\"fa fa-th-large cmap-header-link\" onclick=\"window.location.href = 'http://apps.lincscloud.org/app_list';\">\n			            <div class=\"cmap-header-dropdownContain\">\n			                <div class=\"cmap-header-dropOut cmap-header-apps\">\n			                    <i class=\"cmap-header-link  fa fa-search\" style=\"opacity:0;\"></i><br>\n								<div class=\"cmap-header-dropOut-apps-container\">\n				                    <a href=\"//apps.lincscloud.org/query\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Query.png\" alt=\"\" /></a>\n									<a href=\"//apps.lincscloud.org/data_synopsis\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Data_Synopsis.png\" alt=\"\" /></a><br>\n									<a href=\"//apps.lincscloud.org/compound_digest\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Compound_Digest.png\" alt=\"\" /></a>\n									<a href=\"//apps.lincscloud.org/gene_digest\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Gene_Digest.png\" alt=\"\" /></a><br>\n									<a href=\"//apps.lincscloud.org/history\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_History.png\" alt=\"\" /></a><br>\n\n								</div>\n			                </div>\n			            </div>\n			        </i>\n\n					<!-- developer tools sub-list -->\n					<i title=\"Developer\" class=\"fa fa-cogs cmap-header-link\" onclick=\"window.location.href = 'http://developer.lincscloud.org/';\">\n						<div class=\"cmap-header-dropdownContain\">\n							<div class=\"cmap-header-dropOut cmap-header-developer\">\n								<i class=\"cmap-header-link  fa fa-cogs\" style=\"opacity:0;\"></i><br>\n								<div class=\"cmap-header-dropOut-developer-container\">\n									<a href=\"//api.lincscloud.org\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_API.png\" alt=\"\" /></a>\n									<a href=\"//c3.lincscloud.org\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_C3.png\" alt=\"\" /></a><br>\n									<a href=\"//download.lincscloud.org\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Download.png\" alt=\"\" /></a>\n									<a href=\"//code.lincscloud.org\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_Code.png\" alt=\"\" /></a><br>\n								</div>\n							</div>\n						</div>\n					</i>\n\n					<!-- projects sub-list -->\n					<i title=\"Projects\" class=\"fa fa-book cmap-header-link\" onclick=\"window.location.href = 'http://projects.lincscloud.org/';\">\n						<div class=\"cmap-header-dropdownContain\">\n							<div class=\"cmap-header-dropOut cmap-header-projects\">\n								<i class=\"cmap-header-link  fa fa-cogs\" style=\"opacity:0;\"></i><br>\n								<div class=\"cmap-header-dropOut-projects-container\">\n									<a href=\"//projects.lincscloud.org#LJP\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_LJP.png\" alt=\"\" /></a>\n									<a href=\"//projects.lincscloud.org#LTC\"><img src=\"http://coreyflynn.github.io/Bellhop/ai/header_dropout_icons_LTC.png\" alt=\"\" /></a><br>\n								</div>\n							</div>\n						</div>\n					</i>\n\n					<!-- support -->\n					<i title=\"Support\" class=\"fa fa-question-circle cmap-header-link\" onclick=\"window.location.href = '";
  if (stack1 = helpers.support_link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.support_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "';\"></i>\n			    </div>\n			</div>\n\n		</div>\n\n		<!-- app title and subtitle -->\n		<div class=\"col-sm-4\">\n			<h3 class=\"col-xs-12 cmap-title-text cmap-center-text cmap-header-top-margin\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			<p class=\"col-xs-12 text-muted cmap-subhead-text cmap-center-text\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n		</div>\n\n		<!-- signin/signout and support -->\n		<div class=\"col-sm-3\">\n\n			<!-- user and signin/out -->\n			<div class=\"row cmap-header-top-margin\">\n				<h4 class=\"pull-right\">\n			         ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			     </h4>\n			     ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n\n\n	<!-- small screens -->\n	<div class=\"row visible-xs\">\n	                         <div class=\"col-xs-offset-1 col-xs-10\">\n	                             <p class=\"col-xs-12 cmap-center-text cmap-header-username\">\n	                                 ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	                                 <i title=\"Home\" class=\"fa fa-home cmap-header-link\" onclick=\"window.location.href = 'http://lincscloud.org';\"></i>\n	                                 <i title=\"Apps\" class=\"fa fa-th-large cmap-header-link\" onclick=\"window.location.href = 'http://apps.lincscloud.org/app_list';\"></i>\n	                                 <i title=\"Developer\" class=\"fa fa-cogs cmap-header-link\" onclick=\"window.location.href = 'http://developer.lincscloud.org/';\"></i>\n									 <i title=\"Projects\" class=\"fa fa-book cmap-header-link\" onclick=\"window.location.href = 'http://projects.lincscloud.org/';\"></i>\n	                                 <i title=\"Support\" class=\"fa fa-question-circle cmap-header-link\" onclick=\"window.location.href = '";
  if (stack1 = helpers.support_link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.support_link; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "';\"></i>\n	                                 <!-- <i data-toggle=\"modal\" href=\"#aboutModal\" title=\"about\" class=\"fa fa-info-circle cmap-header-link\"></i> -->\n	                                 ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	                             </p>\n	                         </div>\n\n		<div class=\"row\">\n		    <h3 class=\"col-sm-offset-1 col-sm-10 cmap-title-text cmap-center-text\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n		</div>\n		<div class=\"row\">\n			<p class=\"col-sm-offset-1 col-sm-10 text-muted cmap-subhead-text cmap-center-text\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n		</div>\n	</div>\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapPertSearchBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"typeahead form-control col-lg-12\" autocomplete=\"off\" type=\"text\" placeholder=\"";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-provide=\"typeahead\" id=\"search\">";
  return buffer;
  });

this["BaristaTemplates"]["TypeaheadItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"tt-suggestion\"><span class=\"label\" style=\"background-color: ";
  if (stack1 = helpers.color) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> ";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  });

this["BaristaTemplates"]["d3_target"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px\"></div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:120px\"></div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.height, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });