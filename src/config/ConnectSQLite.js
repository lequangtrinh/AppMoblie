import { openDatabase } from 'react-native-sqlite-storage'
export const ConnectSQLite=openDatabase({
    name:"newdb.db",
    },
    ()=>{ },
    error =>{console.log(error)}
);