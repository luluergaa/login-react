import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AddPerusahaan = () => {
  const [kode_perusahaan, setKode] = useState("");
  const [nama_perusahaan, setNama] = useState("");
  const history = useHistory();

  const saveData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/perusahaan", {
      kode_perusahaan: kode_perusahaan,
      nama_perusahaan: nama_perusahaan,
    });
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={saveData}>
        <div className="field">
          <label className="nama_barang">Kode Perusahaan</label>
          <input
            className="input"
            type="text"
            placeholder="Kode Perusahaan"
            value={kode_perusahaan}
            onChange={(e) => setKode(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="nama_perusahaan">Nama Perusahaan</label>
          <input
            className="input"
            type="number"
            placeholder="Nama Perusahaan"
            value={nama_perusahaan}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddPerusahaan;
