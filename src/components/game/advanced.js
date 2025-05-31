import '../../style/game/advanced.css'

const advanced = ({advanced}) => {
  return (
    <div className="advanced">
      <h6>ADVANCED</h6>
      <div className="table">
        <table>
          <tbody>
            {Object.entries(advanced).map(([key, value]) => (
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
  )
}

export default advanced