(function() {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('lcap_debug') === 'true') {
        LazyLoad.js([
          'https://cdn.jsdelivr.net/npm/eruda',
          'https://cdn.jsdelivr.net/npm/eruda-monitor@1.0.2',
          'https://cdn.jsdelivr.net/npm/eruda-timing@2.0.1',
        ], function() {
          if (window.eruda) {
            eruda.init();

            if (window.erudaMonitor) {
              eruda.add(erudaMonitor);
            }

            if (window.erudaTiming) {
              eruda.add(erudaTiming);
            }
          }
        });
      }
    } catch(e) {
      console.log('载入h5Debugger失败:', e)
    }

    const loadJSWrap = (arr)=>{
      LazyLoad.js(arr.map(url => (window.UIBasePath || '') + url));
    }
    const loadCSSWrap = (arr)=>{
      LazyLoad.css(arr.map(url => (window.UIBasePath || '') + url));
    }
    const loadAssets = () => {
      loadJSWrap(['/packages/vue@2/dist/vue.min.js']);
      loadJSWrap(['/packages/@lcap/mobile-ui@1.4.0/dist-theme/index.js','/packages/@lcap/mobile-template@1.7.1/cloudAdminDesigner.umd.min.js','/packages/lcap-h5-login@0.2.3/dist-theme/index.js','/packages/extension/lottery_draw_library@0.1.3/dist-theme/index.js','/packages/extension/cw_echarts_library@1.0.12/dist-theme/index.js','/packages/extension/cw_dynamic_form_library@1.2.48/dist-theme/index.js','/packages/extension/cw_ant_design_vue_library@1.0.8/dist-theme/index.js']);
      loadJSWrap(['/bundle.0dergg01.min.js']);
      loadCSSWrap(['/packages/@lcap/mobile-ui@1.4.0/dist-theme/index.css','/packages/@lcap/mobile-template@1.7.1/cloudAdminDesigner.css']);
    }
    
    if(window.ICESTARK && window.ICESTARK.root) {
        Object.assign(window.ICESTARK, {
            appEnter({ container, customProps  }) {
                window.LcapMicro = window.LcapMicro || {};
                Object.assign(window.LcapMicro, {});
            
                if(window.LcapMicro.noAuthUrl && !window.LcapMicro.noAuthFn)
                    window.LcapMicro.noAuthFn = () => {
                        location.href = window.LcapMicro.noAuthUrl;
                    };
            
                if(window.LcapMicro.loginUrl && !window.LcapMicro.loginFn)
                    window.LcapMicro.loginFn = () => {
                        location.href = window.LcapMicro.loginUrl;
                    };

                if(window.LcapMicro.notFoundUrl && !window.LcapMicro.notFoundFn)
                    window.LcapMicro.notFoundFn = () => {
                        location.href = window.LcapMicro.notFoundUrl;
                    };
                
                // 兼容 ICESTARK 旧集成方式
                if(!window.LcapMicro.loginFn)
                    window.LcapMicro.loginFn = window.ICESTARK.loginFn;
                if(!window.LcapMicro.routePrefix)
                    window.LcapMicro.routePrefix = window.ICESTARK.basename;
                if(!window.LcapMicro.proxyPrefix)
                    window.LcapMicro.proxyPrefix = window.ICESTARK.proxyPrefix;

                window.LcapMicro.container = container; 
                window.LcapMicro.props = customProps;
                loadAssets();
            },
            appLeave({ container }) {
                container.innerHTML = null;
                if (window.appVM) {
                    window.appVM.$destroy();
                }
                document.querySelectorAll('script.lazyload').forEach((ele) => {
                    ele.active = false;
                });
            },
        });
    } else
        loadAssets();

})()
