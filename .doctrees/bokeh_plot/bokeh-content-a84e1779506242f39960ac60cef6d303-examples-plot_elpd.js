(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("6a67db5f-0e8c-447b-9ed0-483e015c368b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6a67db5f-0e8c-447b-9ed0-483e015c368b' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.1.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"dca91591-5144-459e-9cc4-e21220222066":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20698","type":"AllLabels"},{"attributes":{},"id":"20670","type":"ResetTool"},{"attributes":{"below":[{"id":"20662"}],"center":[{"id":"20665"},{"id":"20669"}],"height":288,"left":[{"id":"20666"}],"output_backend":"webgl","renderers":[{"id":"20691"}],"title":{"id":"20693"},"toolbar":{"id":"20680"},"toolbar_location":null,"width":432,"x_range":{"id":"20654"},"x_scale":{"id":"20658"},"y_range":{"id":"20656"},"y_scale":{"id":"20660"}},"id":"20653","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20656","type":"DataRange1d"},{"attributes":{},"id":"20703","type":"Selection"},{"attributes":{},"id":"20658","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20697"},"group":null,"major_label_policy":{"id":"20698"},"ticker":{"id":"20667"}},"id":"20666","type":"LinearAxis"},{"attributes":{"source":{"id":"20690"}},"id":"20692","type":"CDSView"},{"attributes":{},"id":"20701","type":"AllLabels"},{"attributes":{},"id":"20654","type":"DataRange1d"},{"attributes":{"axis":{"id":"20666"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20669","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20693","type":"Title"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20689","type":"Scatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20678","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"20670"},{"id":"20671"},{"id":"20672"},{"id":"20673"},{"id":"20674"},{"id":"20675"},{"id":"20676"},{"id":"20677"}]},"id":"20680","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"20690"},"glyph":{"id":"20689"},"group":null,"hover_glyph":null,"view":{"id":"20692"}},"id":"20691","type":"GlyphRenderer"},{"attributes":{},"id":"20700","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"20680"}],"tools":[{"id":"20670"},{"id":"20671"},{"id":"20672"},{"id":"20673"},{"id":"20674"},{"id":"20675"},{"id":"20676"},{"id":"20677"}]},"id":"20708","type":"ProxyToolbar"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20703"},"selection_policy":{"id":"20702"}},"id":"20690","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20678"}},"id":"20672","type":"BoxZoomTool"},{"attributes":{},"id":"20702","type":"UnionRenderers"},{"attributes":{},"id":"20675","type":"UndoTool"},{"attributes":{},"id":"20660","type":"LinearScale"},{"attributes":{},"id":"20663","type":"BasicTicker"},{"attributes":{"callback":null},"id":"20677","type":"HoverTool"},{"attributes":{},"id":"20676","type":"SaveTool"},{"attributes":{"children":[[{"id":"20653"},0,0]]},"id":"20707","type":"GridBox"},{"attributes":{},"id":"20671","type":"PanTool"},{"attributes":{"overlay":{"id":"20679"}},"id":"20674","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20700"},"group":null,"major_label_policy":{"id":"20701"},"ticker":{"id":"20663"}},"id":"20662","type":"LinearAxis"},{"attributes":{},"id":"20667","type":"BasicTicker"},{"attributes":{},"id":"20673","type":"WheelZoomTool"},{"attributes":{},"id":"20697","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20679","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"20708"},"toolbar_location":"above"},"id":"20709","type":"ToolbarBox"},{"attributes":{"children":[{"id":"20709"},{"id":"20707"}]},"id":"20710","type":"Column"},{"attributes":{"axis":{"id":"20662"},"coordinates":null,"group":null,"ticker":null},"id":"20665","type":"Grid"}],"root_ids":["20710"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"dca91591-5144-459e-9cc4-e21220222066","root_ids":["20710"],"roots":{"20710":"6a67db5f-0e8c-447b-9ed0-483e015c368b"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();