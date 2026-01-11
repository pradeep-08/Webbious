
const { defineConfig } = require('vite')

module.exports = defineConfig({
    server: {
        proxy: {
            '/qpregular': {
                target: 'https://egovernance.unom.ac.in',
                changeOrigin: true,
                secure: false,
                cookieDomainRewrite: { "*": "" },
                configure: (proxy, options) => {
                    proxy.on('proxyReq', (proxyReq, req, res) => {
                        proxyReq.setHeader('Origin', 'https://egovernance.unom.ac.in');
                        proxyReq.setHeader('Referer', 'https://egovernance.unom.ac.in/qpregular/FrmStudDownloadQP.aspx?IDE_REG=IDE');
                    });
                }
            }
        }
    }
});
