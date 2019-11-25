import { createStyles } from "@material-ui/styles";

export default createStyles({
    userDetailContainer: {
        backgroundColor: "#0ccac4",
        height:800
    },
    root: {
        flexGrow: 1,
        justifyItems: 'center',
        margin: 20,
        backgroundColor: "#0ccac4",
        height:500
      },
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      paper: {
        padding: 5,
        textAlign: 'center',
      },
      inlineBlock: {
          display:'inline-block'
      },
      userAvatar: {
          height:200,
          width: 200,
          borderRadius: 100,
          margin:20,
          backgroundColor: 'white'
      },
      marginTop: {
          marginTop:50
      },
      textLeft:{
          textAlign:'left'
      }
});