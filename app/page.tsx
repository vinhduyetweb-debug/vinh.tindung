
'use client'

import CardItem from '@/components/CardItem'
import { useFinanceStore } from '@/store/useFinanceStore'

export default function HomePage() {
  const { cards, totalDebt } = useFinanceStore()

  return (
    <main style={{
      maxWidth:'420px',
      margin:'0 auto',
      padding:'20px',
      paddingBottom:'100px'
    }}>
      <div style={{marginBottom:'24px'}}>
        <p style={{opacity:0.7}}>Smart Credit Flow</p>

        <h1 style={{
          fontSize:'40px',
          fontWeight:'bold',
          marginTop:'12px'
        }}>
          Financial Dashboard
        </h1>
      </div>

      <div className="card" style={{marginBottom:'20px'}}>
        <p style={{opacity:0.7}}>Tổng dư nợ</p>

        <div style={{
          fontSize:'42px',
          fontWeight:'bold',
          marginTop:'10px'
        }}>
          {totalDebt.toLocaleString()}đ
        </div>

        <div style={{
          display:'flex',
          gap:'12px',
          marginTop:'20px'
        }}>
          <div style={{
            background:'#1e293b',
            padding:'10px 16px',
            borderRadius:'14px'
          }}>
            Score: 82
          </div>

          <div style={{
            background:'rgba(34,197,94,0.15)',
            color:'#86efac',
            padding:'10px 16px',
            borderRadius:'14px'
          }}>
            Stable
          </div>
        </div>
      </div>

      <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'16px'
      }}>
        {cards.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </div>

      <div className="card" style={{marginTop:'20px'}}>
        <h2 style={{fontSize:'24px',fontWeight:'bold'}}>
          Smart Insights
        </h2>

        <div style={{marginTop:'14px',display:'grid',gap:'12px'}}>
          <div style={{
            background:'#1e293b',
            padding:'14px',
            borderRadius:'14px'
          }}>
            Bạn đang sử dụng 54% hạn mức tín dụng.
          </div>

          <div style={{
            background:'#1e293b',
            padding:'14px',
            borderRadius:'14px'
          }}>
            5 ngày nữa là kỳ thanh toán lớn nhất.
          </div>

          <div style={{
            background:'#1e293b',
            padding:'14px',
            borderRadius:'14px'
          }}>
            Gợi ý hạn chế quẹt thêm trong tuần này.
          </div>
        </div>
      </div>
    </main>
  )
}
