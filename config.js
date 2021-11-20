var config = {
    // style: 'mapbox://styles/timateus/ckvxtgvpb2pmg14qen83kul6j',
    style: 'mapbox://styles/timateus/ckvxucfa524t814pbbe2xjaz7', // moonlight
    // style: 'mapbox://styles/timateus/ckvxtrkig68qe14uj83sznnam',
    accessToken: 'pk.eyJ1IjoidGltYXRldXMiLCJhIjoiY2tteTBlbjlmMHNqdDJ1bXQ1MHg5dDl3ZiJ9.Cb6CZjWxA6YB0Y52fkmXbw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Намыв 2020 — Смыв 2222',
    subtitle: `Ноябрьский эпиурбанистический форум 2222. 
    Инститиут традиционного жилищного строительства гуманоидов.`,
     byline: `
     Алтын Мустафина, Анастасия Каминская, Анастасия Раева, Наталия Лозинская, Тимофей Носов 
     для воркшопа Рафаэль Аквавивы в рамках Hydra.Lab`,
    // footer: ``,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
           // title: 'Мир в 2222',
            // image: './path/to/image/source.png',
            // description: 'Что-то в мире не изменилось',
            location: {
                center: [0, 0.00000],
                zoom: 0.45,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'city',
            alignment: 'left',
            hidden: false,
            title: 'Санкт-Петербург',
            //image: './path/to/image/source.png',
            // description: 'Copy these sections to add to your story.',
            location: {
                center: [30.31234, 59.93431],
                zoom: 10.43,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'namiv',
            alignment: 'right',
            hidden: false,
            title: 'Намыв 2020',
            // image: '',
            description: `<div class='row'>
            <div class='column'>
              <img src='./images/2020/1.JPG' alt='Snow' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2020/2.JPG' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2020/3.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2020/4.JPG' alt='Snow' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2020/5.JPG' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2020/6.JPG' alt='Mountains' style='width:100%'>
            </div>
          </div>`,
            // description: 'Copy these sections to add to your story.',
            location: {
                center: [30.19409, 59.93622],
                zoom: 14.07,
                pitch: 41.50,
                bearing: 51.44
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'namiv-built',
            alignment: 'left',
            hidden: false,
            //title: 'построенны здания',
            // image: './path/to/image/source.png',
            description: `<div class='row'>
            <div class='column'>
              <img src='./images/2100/1.jpg' alt='Snow' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2100/2.jpg' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2100/3.jpg' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2100/5.JPG' alt='Mountains' style='width:100%'>
            </div>
          </div>`,
            location: {
                center: [30.20281, 59.93048],
                zoom: 15.03,
                pitch: 60.00,
                bearing: 26.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'namiv-gone',
            alignment: 'right',
            hidden: false,
            // title: 'А теперь намыв gone',
            // image: './path/to/image/source.png',
            description: `<div class='row'>
            <div class='column'>
              <img src='./images/2222/1.JPG' alt='Snow' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2222/2.JPG' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2222/3.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2222/4.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2222/5.JPG' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/2222/6.JPG' alt='Mountains' style='width:100%'>
            </div>

          </div>`,
            location: {
                center: [30.20284, 59.93038],
                zoom: 15.82,
                pitch: 60.00,
                bearing: 26.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'scientist',
            alignment: 'left',
            hidden: false,
            title: 'Ученный',
            // image: './path/to/image/source.png',
            description: `<div class='row'>
            <div class='column'>
              <img src='./images/sci/1.JPG' alt='Snow' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/2.JPG' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/3.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/3.1.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/3.2.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/3.3.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/4.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/5.JPG' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/6.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/7.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/8.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/9.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/10.JPG' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/11.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/sci/12.JPG' alt='Mountains' style='width:100%'>
            </div>
          </div>`,
            location: {
                center: [30.18620, 59.95303],
                zoom: 17.06,
                pitch: 60.00,
                bearing: 132.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'builder',
            alignment: 'right',
            hidden: false,
            title: 'Строитель',
            // image: './path/to/image/source.png',
            description: `<div class='row'>
            <div class='column'>
              <img src='./images/bui/1.JPG' alt='Snow' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/bui/2.JPG' alt='Forest' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/bui/3.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/bui/4.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/bui/5.JPG' alt='Mountains' style='width:100%'>
            </div>
            <div class='column'>
              <img src='./images/bui/6.JPG' alt='Mountains' style='width:100%'>
            </div>
          </div>`,
            location: {
                center: [30.21375, 59.93861],
                zoom: 16.12,
                pitch: 70.00,
                bearing: -113.75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
