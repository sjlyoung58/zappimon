mport { MyEnergi } from 'myenergi-api';
import { gateway_harvi, apikey, zappi, harvi } from './config/config.mjs';

const myenergi = new MyEnergi( gateway_harvi, apikey);


// const myenergi = new MyEnergi("16262939", "MyE1415926", "https://s18.myenergi.net");

async function main() {
    const statusAll = await myenergi.getStatusAll();
    console.log(statusAll);

    const statusZappi = await myenergi.getStatusZappi(zappi);
    console.log(statusZappi);

    const statusHarvi = await myenergi.getStatusHarvi(harvi);
    console.log(statusHarvi);

    //   dao = new AppDAO(config.db.path);
    //   await dao.init();
    //   const latestFsd = await dao.all('select * from v_latest_fsd', []);
    //   console.log(Latest FSDJump processed from ${latestFsd[0].latest_fsd}, scan type ${latestFsd[0].scan_type}
    //            + , processing journals >= ${latestFsd[0].jnl_from});
    //  processVersions();
    // return statusAll;
    }

main();
