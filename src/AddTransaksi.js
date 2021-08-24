import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AddTransaksi = () => {
  const [nama_perusahaan, setNama] = useState("");
  const [nama_barang, setBarang] = useState("");
  const [total_barang, setTotal] = useState("");
  const history = useHistory();

  const saveData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/transaksi", {
      nama_perusahaan: nama_perusahaan,
      nama_barang: nama_barang,
      total_barang: total_barang,
    });
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={saveData}>
        <div className="field">
          <label className="nama_barang">Nama Perusahaan</label>
          <input
            className="input"
            type="text"
            placeholder="Nama Perusahaan"
            value={nama_perusahaan}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="nama_barang">Nama Barang</label>
          <input
            className="input"
            type="text"
            placeholder="Nama Barang"
            value={nama_barang}
            onChange={(e) => setBarang(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="total_barang">Total Barang</label>
          <input
            className="input"
            type="number"
            placeholder="Total Barang"
            value={total_barang}
            onChange={(e) => setTotal(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaksi;
