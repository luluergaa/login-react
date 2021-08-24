import { useState, useEffect } from "react";
import { getUser, removeUserSession } from "./Utils/Common";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  const [perusahaan, setPerusahaan] = useState([]);
  const [transaksi, setTransaksi] = useState([]);
  const [report, setReport] = useState([]);

  useEffect(() => {
    getPerusahaan();
    getTransaksi();
    getReport();
  }, []);

  const getPerusahaan = async () => {
    const response = await axios.get("http://localhost:3000/perusahaan");
    setPerusahaan(response.data);
  };
  const getTransaksi = async () => {
    const response = await axios.get("http://localhost:3000/transaksi");
    setTransaksi(response.data);
  };
  const getReport = async () => {
    const response = await axios.get("http://localhost:3000/report");
    setReport(response.data);
  };

  return (
    <div>
      Welcome {user.name}!<br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
      <br />
      <br />
      <form>
        <h2>Input Perusahaan</h2>
        <Link to="/addPerusahaan" className="button is-primary mt-2">
          Add New
        </Link>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>Kode Perusahaan</th>
              <th>Nama Perusahaan</th>
            </tr>
          </thead>
          <tbody>
            {perusahaan.map((company, index) => (
              <tr key={company.id}>
                <td>{index + 1}.</td>
                <td>{company.kode_perusahaan}</td>
                <td>{company.nama_perusahaan}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Input Transaksi</h2>
        <Link to="/addTransaksi" className="button is-primary mt-2">
          Add New
        </Link>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Perusahaan</th>
              <th>Nama Barang</th>
              <th>Total Barang</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((transaction, index) => (
              <tr key={transaction.id}>
                <td>{index + 1}.</td>
                <td>{transaction.nama_perusahaan}</td>
                <td>{transaction.nama_barang}</td>
                <td>{transaction.total_barang}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Export Data Transaksi</h2>
        <Link to="" className="button is-info mt-2">
          Download
        </Link>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Perusahaan</th>
              <th>Nama Barang</th>
              <th>Total Barang</th>
              <th>Harga Barang</th>
              <th>Grand Total</th>
              <th>Sisa Barang</th>
            </tr>
          </thead>
          <tbody>
            {report.map((laporan, index) => (
              <tr key={laporan.id}>
                <td>{index + 1}.</td>
                <td>{laporan.nama_perusahaan}</td>
                <td>{laporan.nama_barang}</td>
                <td>{laporan.total_barang}</td>
                <td>{laporan.harga_barang}</td>
                <td>{laporan.grand_total}</td>
                <td>{laporan.sisa_barang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Dashboard;
