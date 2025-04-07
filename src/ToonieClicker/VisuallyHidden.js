const hiddenStyle={
    display:'inline-block',
    position:'absolute',
    overflow:'hidden',
    height:1,
    width:1,
    margin:-1,
    padding:0,
    border:0,
};

const VisuallyHidden=({children})=>{
    return(
        <span style={hiddenStyle}>
            {children}
        </span>
    )
};

export default VisuallyHidden; 