import Realm from "realm";

// Declare Schema

class TiccleSchema extends Realm.Object {}
TiccleSchema.schema = {
    name: 'Ticcle',
    primaryKey: 'id',
    properties: {
        id: 'int',
        date: 'date',
        group: 'string',
        title: 'string',
        link: 'string',
        tagList: {type: 'string?[]'},
        mainImage:  'data?',
        contentList: { //limit: 3
            type: 'list',
            objectType: 'SmallTiccle'
        }
    }
};

class SmallTiccleSchema extends Realm.Object {}
SmallTiccleSchema.schema = {
    name: 'SmallTiccle',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        link: 'string',
        imageList: { //limit: 3
            type: 'list',
            objectType: 'Photo'
        },
        content: 'string',
    }
};

class PhotoSchema extends Realm.Object {}
PhotoSchema.schema = {
    name: 'Photo',
    primaryKey: 'id',
    properties: {
        id: 'int',
        message: 'string',
        image: 'data',
    }
};

let realm = new Realm({
    schema: [TiccleSchema, SmallTiccleSchema, PhotoSchema],
    schemaVersion: 2, //데이터 구조 변경할 때 마다 버전 올려줌
    });

//Functions
let getAllBigTiccle = () => {
    return realm.objects('Ticcle');
}

let getAllSmallTiccle = () => {
    return realm.objects('SmallTiccle');
}

let getAllPhoto = () => {
    return realm.objects('Photo');
}

let getTiccleById = (_id) => {
    return realm.objects('Ticcle').filtered('id = '+_id);
}

let getSmallTiccleById = (_id) => {
    return realm.objects('SmallTiccle').filtered('id = '+_id);
}

let getPhotoById = (_id) => {
    return realm.objects('Photo').filtered('id = '+_id);
}

let filterByGroup = (_group) => {
    return realm.objects('Ticcle').filtered('group = '+_gruop);
}

let addTiccle = (_group, _title, _link, _tagList, _mainImage) =>{
    realm.write(() => {
        let _id = 0;
        if(getAllBigTiccle().length > 0) _id = realm.objects('Ticcle').max('id')+1;
        
        let ticcle = realm.create('Ticcle', {
            id: _id,
            date: new Date(),
            group: _group, 
            title: _title,
            link: _link,
            tagList: _tagList,
            mainImage:  _mainImage,
            contentList: []
        });
        ticcle.contentList.push({id: 2, title: "서브 타이틀", link: "링크", imageList: [], content: "내용"})
    });
}

let addSmallTiccle = (_ticcleId, _title, _link, _content) => {
    let bigTiccle = getTiccleById(_ticcleId);

    console.log(bigTiccle[0].title);
    let _id = 0;
    if(getAllSmallTiccle().length > 0) _id = realm.objects('SmallTiccle').max('id')+1;
    
    console.log(bigTiccle[0].contentList.length);
    realm.write(() => {
        if(bigTiccle[0].contentList.length <3){
            bigTiccle[0].contentList.push({id: _id, title: _title, link: _link, imageList: [], content: _content})
        }
    });
}

let addPhoto = (_smallTiccleId, _message, _image) => {
    let smallTiccle = getSmallTiccleById(_smallTiccleId);

    let _id = 0;
    if(getAllPhoto().length > 0) _id = realm.objects('Photo').max('id')+1;

    realm.write(() => {
        if(smallTiccle[0].imageList.length < 3)
            smallTiccle[0].imageList.push({id: _id, message: _message, image:_image});
    });
}

export default realm;

export{
    getAllBigTiccle,
    getAllSmallTiccle,
    getAllPhoto,
    getTiccleById,
    getSmallTiccleById,
    getPhotoById,
    filterByGroup,
    addTiccle,
    addSmallTiccle,
    addPhoto,
}
