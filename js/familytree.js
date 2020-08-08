var chart = new OrgChart(document.getElementById("js-tree"), {
    nodeBinding: {
        field_0: "name"
    },
    nodes: [
        { id: 1, name: "Sali" },
        { id: 2, pid: 1, name: "Ismail" },
        { id: 3, pid: 2, name: "Sabri" },
        { id: 4, pid: 2, name: "Sali" },
        { id: 5, pid: 2, name: "Urke" },
        { id: 6, pid: 2, name: "Ali" },
        { id: 7, pid: 2, name: "Basri" },

        { id: 8, pid: 3, name: "Sitki K. Umgusum" },
        { id: 9, pid: 3, name: "Ismail" },
        { id: 10, pid: 3, name: "Sefika" },
        { id: 11, pid: 3, name: "Huseyin" },
        { id: 12, pid: 3, name: "Nacmiya" },
        { id: 13, pid: 3, name: "Mehmet" },

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

        { id: 28, pid: 8, name: "Remzi K. Emine" },
        { id: 29, pid: 28, name: "Dilber d.Erdinc" },
        { id: 30, pid: 28, name: "Sitki K. Turkan" },
        { id: 31, pid: 29, name: "Zerrin" },
        { id: 32, pid: 29, name: "Berkin" },
        { id: 33, pid: 30, name: "Tolga" },
        { id: 34, pid: 30, name: "Saleh" },

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




    ]
    
});