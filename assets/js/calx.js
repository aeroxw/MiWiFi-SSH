      let r1d_salt = "A2E371B0-B34B-48A5-8C40-A7133F3B5D88";
      // Salt must be reversed for non-R1D devices
      let others_salt = "d44fb0960aa0-a5e6-4a30-250f-6d2df50a";
      others_salt = others_salt.split("-").reverse().join("-");
      function calc() {
        let sn = document.getElementById("sn").value;
        document.getElementById("PWD").value = hex_md5(
          sn + (sn.indexOf("/") > 0 ? others_salt : r1d_salt)
        ).substr(0, 8);
      }
     function copyCodeButton(){
        var copyCommand=document.getElementById("PWD");
        copyCommand.select();
        document.execCommand("Copy");
    }