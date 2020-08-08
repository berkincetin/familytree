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



    ]
    
});