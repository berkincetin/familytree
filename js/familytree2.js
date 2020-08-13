window.onload = function () { 
    var nodes = [
        { id: 1, name: "Sali" },
        { id: 2, pid: 1, name: "Ismail" },
        { id: 3, pid: 2, name: "Sabri" },
        { id: 4, pid: 2, name: "Sali" },
        { id: 5, pid: 2, name: "Urke" },
        { id: 6, pid: 2, name: "Ali" },
        { id: 7, pid: 2, name: "Basri" },

        { id: 8, pid: 3, name: "Sitki K. Umgusum" },
        { id: 9, pid: 3, name: "Ismail K. Fatme" },
        { id: 10, pid: 3, name: "Sefika d. Saban" },
        { id: 11, pid: 3, name: "Huseyin K. Fatme" },
        { id: 12, pid: 3, name: "Nacmiye d. Recep" },
        { id: 13, pid: 3, name: "Mehmet K. Ayse" },

        { id: 14, pid: 4, name: "Necmi" },
        { id: 15, pid: 4, name: "Zulkef" },
        { id: 16, pid: 4, name: "Redcep" },
        { id: 17, pid: 4, name: "Aysa" },
        { id: 18, pid: 4, name: "Basri" },

        { id: 19, pid: 5, name: "Sali" },
        { id: 20, pid: 5, name: "Kadir" },
        { id: 21, pid: 5, name: "Fikriya" },
        { id: 22, pid: 5, name: "Emrulla" },
        { id: 23, pid: 5, name: "Hafiza" },

        { id: 24, pid: 6, name: "Remzi" },
        { id: 25, pid: 6, name: "Basri" },
        { id: 26, pid: 6, name: "Gonul" },
        { id: 27, pid: 6, name: "Ismail" },

        //Family Tree Section for Sitki and Umgusum

        { id: 28, pid: 8, name: "Remzi K. Emine", title: "QA" },
        { id: 29, pid: 28, name: "Dilber d.Erdinc",title: "QA" },
        { id: 30, pid: 28, name: "Sitki K. Turkan",title: "QA" },
        { id: 31, pid: 29, name: "Zerrin",title: "QA" },
        { id: 32, pid: 29, name: "Berkin",img: "https://cdn.balkan.app/shared/5.jpg" ,title: "QA"},
        { id: 33, pid: 30, name: "Tolga",title: "QA" },
        { id: 34, pid: 30, name: "Saleh",title: "QA" },

        { id: 35, pid: 8, name: "Safinaz d. Mustafa" },
        { id: 36, pid: 35, name: "Emine d. Aydin" },
        { id: 37, pid: 35, name: "Ahmet K. Sevgul" },
        { id: 38, pid: 36, name: "Emel" },
        { id: 39, pid: 36, name: "Sadik" },
        { id: 40, pid: 37, name: "Safinaz" },
        { id: 41, pid: 37, name: "Gokhan" },

        { id: 42, pid: 8, name: "Ali K. Emine" },
        { id: 43, pid: 42, name: "Umgusum d. Sinan" },
        { id: 44, pid: 42, name: "Orhan" },
        { id: 45, pid: 43, name: "Samra" },

        { id: 46, pid: 8, name: "Beyda d. Eyub" },
        { id: 47, pid: 46, name: "Gultekin d.Muharam" },
        { id: 48, pid: 46, name: "Nuriye" },

        //Family Tree section for Ismail and Fatme
        { id: 49, pid: 9, name: "Gulzade d. Osman" },
        { id: 50, pid: 9, name: "Gonul d. Viys" },
        { id: 51, pid: 9, name: "Bedriya d. Selim" },
        { id: 52, pid: 9, name: "Ismail K. Fatma" },

        { id: 53, pid: 49, name: "Yusuf K. Ummite" },
        { id: 54, pid: 49, name: "Ayla d. Ferat" },
        { id: 55, pid: 53, name: "Metahan" },
        { id: 56, pid: 53, name: "Gulzade" },

        { id: 57, pid: 50, name: "Savdiye d.Hikmat" },
        { id: 58, pid: 50, name: "Sevim d.Husayin" },
        { id: 59, pid: 50, name: "Hatice d. Ercan" },
        { id: 60, pid: 57, name: "Ayse" },
        { id: 61, pid: 58, name: "Sevil" },
        { id: 62, pid: 58, name: "Onder" },
        { id: 63, pid: 59, name: "Nase" },

        { id: 64, pid: 51, name: "Sulman" },
        { id: 65, pid: 51, name: "Ayse" },
        { id: 66, pid: 51, name: "Surhan" },

        { id: 67, pid: 52, name: "Sabri" },
        { id: 68, pid: 52, name: "Rayma" },

        //Family Tree section for Sefika and Saban
        { id: 69, pid: 10, name: "Safiye d. Recep" },
        { id: 70, pid: 10, name: "Sadik K. Selme" },
        { id: 71, pid: 10, name: "Muzater K. Fatme" },

        { id: 72, pid: 69, name: "Hasan K. Sevethan"},
        { id: 73, pid: 69, name: "Husayin"},
        { id: 74, pid: 69, name: "Mustafa"},

        { id: 75, pid: 70, name: "Saban"},
        { id: 76, pid: 70, name: "Tuncay"},

        { id: 77, pid: 71, name: "Sefika"},
        { id: 78, pid: 71, name: "Senay"},

        { id: 79, pid: 72, name: "Redcep"},
        { id: 80, pid: 72, name: "Safiye"},

        //Family Tree section for Huseyin and Fatme
        { id: 81, pid: 11, name: "Basri K. Magbule" },
        { id: 82, pid: 11, name: "Benide d. Cevat" },
        { id: 83, pid: 11, name: "Sabri d. Mediha" },

        { id: 84, pid: 81, name: "Reyhan" },
        { id: 85, pid: 81, name: "Fatme d. Rusen" },
        { id: 86, pid: 81, name: "Ayse" },

        { id: 87, pid: 82, name: "Ali K. Seval" },
        { id: 88, pid: 82, name: "Bulent" },
        { id: 89, pid: 82, name: "Ayse" },

        { id: 90, pid: 83, name: "Sevim" },
        { id: 91, pid: 83, name: "Aylin" },

        { id: 92, pid: 85, name: "Sabri" },
        { id: 93, pid: 87, name: "Cevat" },

        //Family Tree section for Necmiye and Recep
        { id: 94, pid: 12, name: "Redcep K. Fatma" },
        { id: 95, pid: 12, name: "Hava d. Fikrat" },
        { id: 96, pid: 12, name: "Atca d. Rustem" },

        { id: 97, pid: 94, name: "Necmiye d. Ragup" },
        { id: 98, pid: 94, name: "Tezgul d. Osman" },
        { id: 99, pid: 94, name: "Redcep" },

        { id: 100, pid: 95, name: "Numit" },
        { id: 101, pid: 95, name: "Baris" },
        { id: 102, pid: 95, name: "Gonul" },


        { id: 103, pid: 96, name: "Aytan" },
        { id: 104, pid: 96, name: "Bayram" },

        { id: 105, pid: 97, name: "Elmas" },
        { id: 106, pid: 97, name: "Ragup" },

        //Family Tree section for Mehmet and Ayse

        { id: 107, pid: 13, name: "Omar K. Fides" },
        { id: 108, pid: 13, name: "Rayme" },
        { id: 109, pid: 13, name: "Eugin K. Behidce" },
        { id: 110, pid: 13, name: "Gulbahar d. Hoseyin"},

        { id: 111, pid: 107, name: "Aytan" },

        { id: 112, pid: 109, name: "Ayse" },

    ];

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        switch (node.title) {
            case "QA":
                node.tags = ["QA"];
                break;
            case "Marketer":
            case "Designer":
            case "Sales Manager":
                node.tags = ["Marketing"];
                break;
        }
    }

    var chart = new OrgChart(document.getElementById("js-tree"), {
        layout: OrgChart.mixed,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        nodes: nodes
    });
};


