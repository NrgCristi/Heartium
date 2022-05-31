const { default: axios } = require("axios");
const { application } = require('express')


/**
 * 
 * @param {application} app 
 * @param {String} port 
 */
module.exports = (app, port) => {
    //var lastest = await axios.get("https://api.nitestats.com/v1/epic/builds/fltoken")
    app.get(["/content/api/pages/fortnite-game", "/content/api/pages/"], async (req, res) => {
        var season = "9";
        try {
            season = req.headers["user-agent"].split('-')[1].split('.')[0]
        } catch { }
        finally {
            if (season == "10") {
                season = "x";
            }
        }

        const content = (await axios.get('https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game').catch(() => {}))?.data;

        res.json({
            "jcr:isCheckedOut": true,
            "_title": "Fortnite Game",
            "jcr:baseVersion": "a7ca237317f1e7b00bc82e-d9a2-4f0d-b951-704d295cd1aa",
            "_activeDate": "2017-07-24T22:24:02.300Z",
            "lastModified": "2020-11-01T17:36:19.024Z",
            "_locale": "en-US",
            "emergencynotice": {
                "news": {
                    "platform_messages": [],
                    "_type": "Battle Royale News",
                    "messages": [{
                        "hidden": true,
                        "_type": "CommonUI Simple Message Base",
                        "subgame": "br",
                        "body": "Made by NRG Cristi",
                        "title": "Heartium",
                        "spotlight": true
                    },
                    ],
                },
                "jcr:isCheckedOut": true,
                "_title": "emergencynotice",
                "_noIndex": true,
                "alwaysShow": true,
                "jcr:baseVersion": "a7ca237317f1e761d4ee60-7c40-45a8-aa3e-bb0a2ffa9bb5",
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": "2020-10-30T04:50:59.198Z",
                "_locale": "en-US"
            },
            "emergencynoticev2": {
                "jcr:isCheckedOut": true,
                "_title": "emergencynoticev2",
                "_noIndex": true,
                "emergencynotices": {
                    "_type": "Emergency Notices",
                    "emergencynotices": [
                        {
                            "hidden": true,
                            "_type": "CommonUI Emergency Notice Base",
                            "title": "Neonite V2",
                            "body": "Made by kemo (@xkem0x) and Beat (@TheBeatYT_evil)..\r\nDiscord: https://discord.gg/DJ6VUmD",
                        }
                    ]
                },
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": "2021-03-17T15:07:27.924Z",
                "_locale": "en-US"
            },
            "battleroyalenewsv2": {
                "news": {
                    "motds": [{
                        "entryType": "Website",
                        "image": `http://127.0.0.1:${port}/NeoniteWallpaper1920x1080.png`,
                        "tileImage": `http://127.0.0.1:${port}/Neonite1024.png`,
                        "videoMute": true,
                        "hidden": false,
                        "tabTitleOverride": "Heartium",
                        "_type": "CommonUI Simple Message MOTD",
                        "title": "Heartium",
                        "body": "Made By NRG Crisi",
                        "videoLoop": true,
                        "videoStreamingEnabled": true,
                        "sortingPriority": 0,
                        "id": "NeoniteNewsBR",
                        "videoAutoplay": true,
                        "videoFullscreen": true,
                        "spotlight": true,
                    }]
                },
                "jcr:isCheckedOut": true,
                "_title": "battleroyalenewsv2",
                "header": "",
                "style": "None",
                "_noIndex": true,
                "alwaysShow": true,
                "jcr:baseVersion": "a7ca237317f1e704b1a186-6846-4eaa-a542-c2c8ca7e7f29",
                "_activeDate": "2020-01-21T14:00:00.000Z",
                "lastModified": "2021-02-10T23:57:48.837Z",
                "_locale": "en-US"
            },
            "shopCarousel": {
                "jcr:isCheckedOut": true,
                "itemsList": {
                    "_type": "ShopCarouselItemList",
                    "items": [{
                        "fullTitle": "Heartium",
                        "hidden": true,
                        "_type": "ShopCarouselItem",
                        "landingPriority": 100,
                        "action": "ShowOfferDetails",
                        "offerId": null,
                        "title": "Heartium"
                    }]
                },
                "_title": "shop-carousel",
                "_noIndex": true,
                "jcr:baseVersion": "a7ca237317f1e765be23f9-d0fd-4067-ae00-ef29af2376cc",
                "_activeDate": "2020-09-25T12:00:00.000Z",
                "lastModified": "2020-12-05T23:52:44.269Z",
                "_locale": "en-US"
            },
            "dynamicbackgrounds": content.dynamicbackgrounds || {
                "jcr:isCheckedOut": true,
                "backgrounds": {
                    "backgrounds": [
                        {
                            "stage": "defaultnotris",
                            "_type": "DynamicBackground",
                            "key": "lobby"
                        }
                    ],
                    "_type": "DynamicBackgroundList"
                },
                "_title": "dynamicbackgrounds",
                "_noIndex": true,
                "jcr:baseVersion": "a7ca237317f1e70712af90-59fe-4576-8f32-f80bf513c946",
                "_activeDate": "2020-07-06T06:00:00.000Z",
                "lastModified": "2021-06-22T13:53:48.402Z",
                "_locale": "en-US"
            },
            "shopSections": {
                "jcr:isCheckedOut": true,
                "_title": "shop-sections",
                "sectionList": {
                    "_type": "ShopSectionList",
                    "sections": [
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": true,
                            "sectionId": "Marvel",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel3",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel4",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel5",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel6",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel7",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 75,
                            "bHidden": true,
                            "sectionId": "GuildHenLocker",
                            "bShowTimer": true,
                            "sectionDisplayName": "Guild Hen's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 74,
                            "bHidden": true,
                            "sectionId": "FootballIcon",
                            "bShowTimer": true,
                            "sectionDisplayName": "Football Icons",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 70,
                            "bHidden": true,
                            "sectionId": "Featured",
                            "bShowTimer": true,
                            "sectionDisplayName": "Featured",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": true,
                            "sectionId": "Featured2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 54,
                            "bHidden": true,
                            "sectionId": "Featured3",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": true,
                            "sectionId": "PizoLocker",
                            "bShowTimer": true,
                            "sectionDisplayName": "Pizo's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": true,
                            "sectionId": "BenjyfishyLocker",
                            "bShowTimer": true,
                            "sectionDisplayName": "Benjyfishy's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": true,
                            "sectionId": "NickEh30Locker",
                            "bShowTimer": true,
                            "sectionDisplayName": "NickEh30's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 60,
                            "bHidden": true,
                            "sectionId": "Daily",
                            "bShowTimer": true,
                            "sectionDisplayName": "Daily",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 59,
                            "bHidden": true,
                            "sectionId": "Daily2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 90,
                            "bHidden": true,
                            "sectionId": "CustomizeHero",
                            "bShowTimer": true,
                            "sectionDisplayName": "Customize Your Hero!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": true,
                            "sectionId": "HeroGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Hero Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 90,
                            "bHidden": true,
                            "sectionId": "ShadowStrike",
                            "bShowTimer": true,
                            "sectionDisplayName": "Shadow Strike",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": true,
                            "sectionId": "FootballIconB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Football Icons",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": true,
                            "sectionId": "MarvelB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel2B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel3B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel4B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel5B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel6B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel7B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 75,
                            "bHidden": true,
                            "sectionId": "StartParty",
                            "bShowTimer": true,
                            "sectionDisplayName": "Start the Party!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "StartParty2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Start the Party!",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "GuildHenLockerB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Guild Hen's Locker",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 54,
                            "bHidden": true,
                            "sectionId": "Cowboys",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cowboys",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 55,
                            "bHidden": true,
                            "sectionId": "Farm",
                            "bShowTimer": true,
                            "sectionDisplayName": "From the Farm",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": true,
                            "sectionId": "BannerBrigade",
                            "bShowTimer": true,
                            "sectionDisplayName": "Banner Brigade",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "BannerBrigade2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Banner Brigade",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 80,
                            "bHidden": true,
                            "sectionId": "MelloB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marshmello",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "MelloC",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marshmello",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "MajorLazerB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Major Lazer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "TurnMusicUpB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Turn The Music Up",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "TurnMusicUp2B",
                            "bShowTimer": true,
                            "sectionDisplayName": "Turn The Music Up",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 75,
                            "bHidden": true,
                            "sectionId": "VaultShop",
                            "bShowTimer": true,
                            "sectionDisplayName": "Vaulted a Year or More",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "VaultShop2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Vaulted a Year or More",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "VaultShop3",
                            "bShowTimer": true,
                            "sectionDisplayName": "Vaulted a Year or More",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 50,
                            "bHidden": true,
                            "sectionId": "SpecialB",
                            "bShowTimer": true,
                            "sectionDisplayName": "Special Offers",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 50,
                            "bHidden": true,
                            "sectionId": "Special",
                            "bShowTimer": true,
                            "sectionDisplayName": "Special Offers",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 49,
                            "bHidden": true,
                            "sectionId": "Special2",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 48,
                            "bHidden": true,
                            "sectionId": "Special3",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 47,
                            "bHidden": true,
                            "sectionId": "Special4",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 46,
                            "bHidden": true,
                            "sectionId": "Special5",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 45,
                            "bHidden": true,
                            "sectionId": "Special6",
                            "bShowTimer": true,
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 100,
                            "bHidden": true,
                            "sectionId": "DC",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": true,
                            "sectionId": "DCB",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "DC2B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "DC3B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "DC4B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "DC5B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "DC6B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "DC7B",
                            "bShowTimer": true,
                            "sectionDisplayName": "DC",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": true,
                            "sectionId": "PartyGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Party Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": true,
                            "sectionId": "BannerGear",
                            "bShowTimer": true,
                            "sectionDisplayName": "Banner Gear",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 65,
                            "bHidden": true,
                            "sectionId": "CosmicSummer",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "CosmicSummer2",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "CosmicSummer3",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "CosmicSummer4",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "CosmicSummer5",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "CosmicSummer6",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "CosmicSummer7",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "CosmicSummer8",
                            "bShowTimer": true,
                            "sectionDisplayName": "Cosmic Summer",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 64,
                            "bHidden": true,
                            "sectionId": "MarvelC",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel2C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel3C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel4C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel5C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel6C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 1,
                            "bHidden": true,
                            "sectionId": "Marvel7C",
                            "bShowTimer": true,
                            "sectionDisplayName": "Marvel",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": true,
                            "sectionId": "Bundles",
                            "bShowTimer": true,
                            "sectionDisplayName": "Bundles",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": true,
                            "sectionId": "Characters",
                            "bShowTimer": true,
                            "sectionDisplayName": "Outfits",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": true,
                            "sectionId": "Backpacks",
                            "bShowTimer": true,
                            "sectionDisplayName": "Back Blings",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 0,
                            "bHidden": true,
                            "sectionId": "Pickaxes",
                            "bShowTimer": true,
                            "sectionDisplayName": "Harvesting Tools",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": true,
                            "sectionId": "Gliders",
                            "bShowTimer": true,
                            "sectionDisplayName": "Gliders",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": true,
                            "sectionId": "MusicPacks",
                            "bShowTimer": true,
                            "sectionDisplayName": "Music Packs",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": true,
                            "sectionId": "Wraps",
                            "bShowTimer": true,
                            "sectionDisplayName": "Wraps",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 80,
                            "bHidden": true,
                            "sectionId": "LimitedTime",
                            "bShowTimer": true,
                            "sectionDisplayName": "Limited Time",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "landingPriority": 90,
                            "bHidden": true,
                            "sectionId": "Battlepass",
                            "bShowTimer": true,
                            "sectionDisplayName": "Battle Pass",
                            "bShowIneligibleOffers": true
                        },
                        {
                            "bSortOffersByOwnership": true,
                            "bShowIneligibleOffersIfGiftable": true,
                            "bEnableToastNotification": true,
                            "background": {
                                "stage": "summer",
                                "_type": "DynamicBackground",
                                "key": "vault"
                            },
                            "_type": "ShopSection",
                            "bHidden": true,
                            "sectionId": "Subscription",
                            "bShowTimer": true,
                            "sectionDisplayName": "Fortnite Crew",
                            "bShowIneligibleOffers": true
                        }
                    ]
                },
                "_noIndex": true,
                "jcr:baseVersion": "a7ca237317f1e77453e266-613d-435e-9dd1-f549c0255030",
                "_activeDate": "2021-06-21T23:00:00.000Z",
                "lastModified": "2021-06-21T16:08:13.601Z",
                "_locale": "en-US"
            },
            playlistinformation: content.playlistinformation,
            "_suggestedPrefetch": [
               
            ]
        })
    })

    /*app.post("/api/v1/fortnite-br/surfaces/motd/target", (req, res) => {
        res.status(404).end();
    })*/
}
