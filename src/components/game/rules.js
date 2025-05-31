import "../../style/game/rules.css";

const rules = ({ rules }) => {
  return (
    <div className="rules">
      <h6>RULES</h6>
      <div className="table">
        <table>
          <tbody>
            {Object.entries(rules).map(([key, value]) => (
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

export default rules;
