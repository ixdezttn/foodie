/******************************

脚本功能：Foodie-美食相机——解锁VIP
下载地址：https://is.gd/RChGSr
软件版本：5.2.11
脚本作者：彭于晏💞
更新时间：2023-9-28
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************


*******************************/

var objc = JSON.parse($response.body);

    objc = {
{
	"result": {
		"activated": true,
		"products": [],
		"vipSegments": ["NEVER_USED_VIP"]
	}
}
}
$done({body : JSON.stringify(objc)});
