import RightSIdebar from '@/components/RightSIdebar';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react' 

const Home = () => {

    const loggedIn = { firstName: 'Aditya', lastName: 'Diwakar', email: 'adityadiwakar202@gmail.com'};

    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type ="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSIdebar user ={loggedIn} transactions={[]} banks={[{ currentBalance: 350.33 }, { currentBalance: 460.45 }]}/>
        </section>
    )
}

export default Home;