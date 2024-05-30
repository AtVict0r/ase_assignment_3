const Main = () => {
    const [contentBlocks, setContentBlocks] = React.useState(['Content Block 1', 'Content Block 2', 'Content Block 3']);
  
    return (
      <main style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          {contentBlocks.map((block, index) => (
            <div key={index} style={{ flex: 1, margin: '0 10px' }}>
              {block}
            </div>
          ))}
        </section>
        <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Month</th>
              <th>Day</th>
              <th>Time</th>
              <th>DMV Staff</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nov</td>
              <td>17</td>
              <td>5:00PM</td>
              <td>Peter</td>
            </tr>
            <tr>
              <td>Nov</td>
              <td>18</td>
              <td>9:00AM</td>
              <td>Lucas</td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  };

export default Main;  