import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const Toastify = () => {
  return (
    <div style={{textAlign:"center", marginTop:"20%"}}>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
}
export default Toastify;