
export default function CardItem({ bank, debt, limit, dueDate }) {
  const percent = Math.round((debt / limit) * 100)

  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
          <h3 style={{fontSize:'22px',fontWeight:'bold'}}>{bank}</h3>
          <p style={{opacity:0.7}}>Due: {dueDate}</p>
        </div>

        <div style={{textAlign:'right'}}>
          <div>{percent}% Used</div>
          <div style={{fontWeight:'bold'}}>
            {debt.toLocaleString()}đ
          </div>
        </div>
      </div>

      <div style={{
        marginTop:'16px',
        height:'12px',
        background:'#334155',
        borderRadius:'999px'
      }}>
        <div style={{
          width:`${percent}%`,
          height:'100%',
          background:'#4ade80',
          borderRadius:'999px'
        }} />
      </div>
    </div>
  )
}
