import '../../style/game/settings.css'

const settings = ({ settings }) => {
  return (
    <div className="settings">
      <h6>SETTINGS</h6>
      <div className="table">
        <table>
          <tbody>
            {Object.entries(settings).map(([key, value]) => (
              <tr key={key}>
                <td className="table-key">
                  {key.replace(/_/g, " ").toUpperCase()}
                </td>
                <td className="table-value">{String(value).toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default settings;
