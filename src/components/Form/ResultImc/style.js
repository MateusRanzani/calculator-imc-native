import { StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
  },
  marginTopText: {
    marginTop: 20,
    color:"white",
    fontSize:20
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  textImcResponse: {
    fontSize:30,
    fontWeight:"bold",
    color:"white",
  },
  boxShareButton: {
    width:"100%",
    alignItems:"center",
    marginBottom:10,
  },
  shared: {
    marginTop:10,
    backgroundColor:"#1877f2",
    borderRadius:50,
    paddingTop:5,
    paddingBottom: 5,
  },
  sharedText: {
    color:"#ffffff",
    fontWeight:"bold",
    paddingHorizontal:30,

  }
});

export default styles