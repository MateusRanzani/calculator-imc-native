import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#04D361",
        alignItems:"center",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop:30,
    },
    formContent: {
      marginTop:20,
      alignItems:"center",
    },
    textForm: {
      color:"white",
      fontSize:25,
      fontWeight:"bold",
      alignItems:"center"
    },
    inputForm: {
      backgroundColor:"rgba(2, 163, 74, 0.3)",
      padding:10,
      borderRadius: 15,
      width:250,
      height:"auto",
    },
    buttonForm: {
      width:`100%`,
      height:"auto",
      padding:10,
      borderRadius: 15,
      marginTop: 20,
      opacity:10,
      backgroundColor:"rgb(2, 163, 74)"
    },
    textButtonForm: {
      color:"white",
      fontSize:20,
    },
    marginTopText: {
      marginTop: 20,
    },
   
  });

export default styles