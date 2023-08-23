import {db, storage} from "../Firebase/index.js";
import {useEffect, useState} from "react";
import {addDoc, collection,getDoc, getDocs, limit, orderBy, query,doc,deleteDoc,updateDoc} from 'firebase/firestore'
import {getDownloadURL, ref, uploadBytes,deleteObject} from "firebase/storage";

const useFiresotre = () => {
    const getAllCollection = (colName,sort="desc") => {
        const [data,setData] = useState([])
        useEffect(() => {
            let ref = collection(db,colName)
            const q = query(ref,orderBy('created_at',sort))
            getDocs(q).then((docs)=>{
                let allData = [];
                docs.forEach(doc=>{
                    let getData = {id:doc.id,...doc.data()}
                    allData.push(getData)
                })
                setData(allData)
            })
        }, []);
        return data
    }
    const getCollectionByLimit = (colName,lit=5) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [data,setData] = useState([])
        useEffect(() => {
            let ref = collection(db,colName)
            const q = query(ref,limit(lit))
            getDocs(q).then((docs)=>{
                let limitDatas = [];
                docs.forEach(doc=>{
                    let limitData = {id:doc.id,...doc.data()}
                    limitDatas.push(limitData)
                })
                setData(limitDatas)
            })
        }, []);
        return data
    }
    const singleCollection = (colName,id) =>{
        const [data,setData] = useState(null)
        const ref = doc(db,colName,id)
           getDoc(ref).then(doc=>{
              if (doc.exists()){
                  setData(doc)
              }else {
                  console.log("not found")
              }
           })
        return data;
    }
    const addCollection = async (colName,data,file=null) => {
        let insertData ;
        if (file){
            let fileName = Date.now().toString()+"_____"+file.name
            let path = "/projects/"+fileName
            const storageRef = ref(storage,path)
            await uploadBytes(storageRef,file)
             let url = await getDownloadURL(storageRef)
            insertData = {image:url,...data}
        }else {
            insertData = {...data}
        }

        const ref1 = collection(db,colName)
        return await addDoc(ref1, insertData);
    }
    const deleteDocument = async (colName, id) => {
        const ref = doc(db, colName, id)
        await deleteDoc(ref)
    }
    const updateDocument = async (colName,id,data,file=null) => {
        let updateData ;
        if (file){
            let fileName = Date.now().toString()+"_____"+file.name
            let path = "/projects/"+fileName
            const storageRef = ref(storage,path)
            await uploadBytes(storageRef,file)
            let url = await getDownloadURL(storageRef)
            updateData = {image:url,...data}
        }else {
            updateData = {...data}
        }
        const ref2 = doc(db,colName,id)
        return await updateDoc(ref2, updateData);
    }

    const deleteStorage = (urlF) => {
        const desertRef = ref(storage, urlF);
// Delete the file
        deleteObject(desertRef).then(() => {
            console.log('delete')
        }).catch((error) => {
            console.log(error)
        });
    }
    return{getAllCollection,deleteStorage,getCollectionByLimit,singleCollection,addCollection,updateDocument,deleteDocument}
}
export default useFiresotre