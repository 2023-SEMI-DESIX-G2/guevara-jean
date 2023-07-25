const error = (error,mensaje="",res)=>{
  console.error(`${mensaje}`, error);
  res.status(500).json({ error: `${mensaje}` });
}

module.exports = {
error_show:error
}