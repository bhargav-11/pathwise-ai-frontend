const Googlefolderid = ({folderid,setFolderid,storagefolderId}) =>{
    return(
        <>
         <div className="google-folder-id">
            <div className="google-folder-modal">
              <div className="google-folder-content">
                Enter google drive folder id
              </div>
              <div className="google-folder-input">
                <input
                  type="text"
                  placeholder="23333455423333455"
                  id="centered-input"
                  value={folderid}
                  onChange={(event)=>setFolderid(event.target.value)}
                />
              </div>
              <div className="google-folder-button">
                <button onClick={storagefolderId}>set</button>
              </div>
            </div>
          </div>
        </>
    )
}
export default Googlefolderid;