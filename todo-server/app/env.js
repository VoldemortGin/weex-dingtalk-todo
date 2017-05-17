/**
 * Created by xiangwenwen on 2017/2/16.
 */

const config = {
    scheme: 'release',
    connect: {
        beta: 'mongodb://127.0.0.1:27017/tokentable',
        release: 'mongodb://127.0.0.1:27017/tokentable'
    },
    CorpID: 'dinga63be247eebe752735c2f4657eb6378f',
    CorpSecret: 'rfpkBbBVXRDuIZtcZOVNCh1602G1zqdo4dSCr9iMoky1tavk4X-fof1eacEA8s4L',
    OAPI_HOST: {
        release: 'https://oapi.dingtalk.com'
    }
};

if (process.env.NODE_ENV !== 'product') {
    config.scheme = 'release';
}

module.exports = config;
