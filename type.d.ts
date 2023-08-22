export interface IYoubikeData {
  act: string; // 全站禁用狀態(0:禁用、1:啟用)  eg. "1"
  bemp: number; // 空位數量, eg. 24
  sbi: number; // 場站目前車輛數量, eg. 4
  sna: string; // 站名, eg. "YouBike2.0_捷運科技大樓站"
  snaen: string; // 英文站名 eg. "YouBike2.0_MRT Technology Bldg."
  sno: string; // 車站編號, eg."500101001"
  tot: number; // 場站總停車格, eg. 28
  sarea: string; // 區域, eg. "大安區", "中正區" , "台大校園區"
  sareaen: string; // 英文區域, eg. "Daan Dist."
  ar: string; // 地址, eg. "復興南路二段235號前"
  aren: string; // 英文地址, eg. "No.235， Sec. 2， Fuxing S. Rd."
  lat: number; // 緯度, eg. 25.02605
  lng: number; // 緯度, eg. 121.5436
  mday: number; // 微笑單車各場站來源資料更新時間, eg. "2023-08-22 10:39:04"
  infoDate: string; // 微笑單車各場站來源資料更新日期, eg. "2023-08-22"
  infoTime: string; // 微笑單車各場站來源資料更新日期, eg. "2023-08-22  10:39:04";
  srcUpdateTime: string; // 微笑單車系統發布資料更新的時間, eg. "2023-08-22 10:39:42"
  updateTime: string; // 北市府交通局數據平台經過處理後將資料存入DB的時間, eg."2023-08-22 10:41:09"
}
