"use client";

import { Header } from '@/components/Header';
import { TimeFormat } from '@/components/TimeFormat';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

const features = [
  {
    image: 'logo_cryptonews.png',
    width: 193,
    height: 47,
  },
  {
    image: 'logo_coindesk.png',
    width: 237,
    height: 46,
  },
  {
    image: 'logo_bitcoinist.png',
    width: 226,
    height: 31,
  },
  {
    image: 'logo_techopedia.png',
    width: 201,
    height: 40,
  },
  {
    image: 'logo_newsbtc.png',
    width: 154,
    height: 38,
  },
];

export default function Home() {
  const [ethAmount, setEthAmount] = useState(0);
  const [choobinAmount, setChoobinAmount] = useState(0);

  return (
    <main className="flex flex-col min-h-screen bg-black">
      <div className="bg-introduce bg-cover pt-29 pb-25 relative">
        <Header />
        <div className="max-w-wrapper mx-auto grid grid-cols-1 lg:grid-cols-2 pt-16">
          <div className="px-5 lg:px-0">
            <h1 className="text-white text-[35px] md:text-[57px] font-lakki">Choobin Airdrop</h1>
            <p className="text-white text-[20px] md:text-[25px] font-lakki mb-6">Season 1 of the Choobin Coin Airdrop concludes in...</p>
            <TimeFormat />
            
            <div className="flex justify-center md:justify-center mt-6 md:mt-0">
              <Image src="/images/unicon.png" alt="" width={397} height={366} className="w-56 md:w-100" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative px-5 md:px-0">
              <Image src="/images/shop_header_bg.png" alt="" width={641} height={173} className="w-160" />
              <div className="absolute top-10 md:top-[76px] left-1/2 transform -translate-x-1/2 text-[25px] md:text-[37px] font-lakki uppercase mt-2">Buy and Stake</div>
            </div>
            <div className="w-full z-10 -mt-3 relative flex flex-col items-center">
              <Image src="/images/shop_content.png" alt="" width={738} height={558} className="h-104 md:h-139.5" />
              <div className="absolute left-0 top-0 w-full pt-16 md:pt-24">
                <p className="max-w-screen mx-8 lg:max-w-116.5 lg:mx-auto text-center mb-0 md:mb-5 font-lakki text-[20px]">
                  Buy and stake $Choobin to earn rewards, plus qualify for the huge airdrop!
                </p>
                <div className="flex justify-center mb-6">
                  <button className="bg-pink_button flex items-center justify-center h-10 md:h-15 w-73.5 md:w-108 bg-contain bg-no-repeat font-lakki text-lg md:text-[24px] pt-2">
                    Buy with SOL
                  </button>
                </div>
                <div className="flex justify-center mx-11 md:mx-0 mb-3 md:mb-7.5">
                  <div className="flex-1 relative max-w-56">
                    <Image src="/images/small_widget.png" alt="widget" width={225} height={111} className="w-full" />
                    <div className="absolute left-0 top-0 w-full p-2 md:p-4">
                      <div className="flex justify-between text-base sm:text-lg md:text-[20px] font-lakki">
                        <span>Pay with SOL</span>
                        <button>Max</button>
                      </div>
                      <div className="relative">
                        <Image src="/images/pink_input.png" alt="" width={204} height={48} className="h-7 md:h-12" />
                        <div className="absolute left-0 top-0 w-full h-full flex items-center justify-between px-1 sm:px-3">
                          <input
                            type="number"
                            value={ethAmount}
                            onChange={(e) => setEthAmount(+e.target.value)}
                            className="bg-transparent outline-none w-20 md:w-30"
                          />
                          <Image src="/images/svgs/eth.svg" alt="" className="w-4 h-4 md:w-5.5 md:h-5.5" width={22} height={22} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 relative max-w-56">
                    <Image src="/images/small_widget.png" alt="widget" width={225} height={111} className="w-full" />
                    <div className="absolute left-0 top-0 w-full p-2 md:p-4">
                      <div className="flex justify-between font-lakki text-base sm:text-lg md:text-[20px]">
                        <span>Receive $Choobin</span>
                      </div>
                      <div className="relative">
                        <Image src="/images/pink_input.png" alt="" width={204} height={48} className="h-7 md:h-12" />
                        <div className="absolute left-0 top-0 w-full h-full flex items-center justify-between px-1 sm:px-3">
                          <input
                            type="number"
                            value={choobinAmount}
                            onChange={(e) => setChoobinAmount(+e.target.value)}
                            className="bg-transparent outline-none w-20 md:w-30"
                          />
                          <Image src="/images/svgs/choobin.svg" alt="" className="w-4 h-4 md:w-5.5 md:h-5.5" width={22} height={22} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="flex justify-center">
                  <button className="w-36 md:w-55 bg-white_button flex items-center justify-center h-10 md:h-15 bg-contain bg-no-repeat text-base md:text-[20px] font-lakki pt-3">
                    Buy
                  </button>
                  <button className="w-36 md:w-55 bg-white_button flex items-center justify-center h-10 md:h-15 bg-contain bg-no-repeat text-base md:text-[20px] font-lakki pt-3">
                    Buy and Stake
                  </button>
                </div>
                <div className="absolute bottom-16 right-4 flex flex-col items-end">
                  <Image src="/gif/sparkle_1.gif" alt="" width={18} height={15} className="w-4.5 h-3.5" />
                  <Image src="/gif/sparkle_2.gif" alt="" width={26} height={22} className="w-6.5 h-5.5" />
                  <Image src="/gif/sparkle_3.gif" alt="" width={38} height={38} className="w-9.5 h-9.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-140 md:h-222 bg-stake bg-cover bg-center pt-40">
        <div className="flex justify-center px-5">
          <button className="bg-stake_button w-full md:w-185 h-12 md:h-24 bg-contain bg-no-repeat pt-2">
            <span className="text-lg md:text-[40px] font-lakki">Stake for 90 days with 10% APY</span>
          </button>
        </div>
      </div>
      <div className="max-w-wrapper lg:px-24 mx-auto w-full relative pb-30 font-lakki">
        <div className="mb-8 md:mb-16 px-5 lg:px-0">
          <div className="relative w-full lg:w-233">
            <Image src="/images/mem_coin.png" alt="" className="hidden lg:block w-233" width={931} height={375} />
            <Image src="/images/mem_coin_mobile.png" alt="" className="lg:hidden w-full h-105" width={355} height={420} />
            <div className="absolute top-0 left-0 w-full px-8 pt-16 pb-10 md:px-16 md:py-16">
              <div className="flex justify-center md:justify-end">
                <div className="text-center md:text-right text-[25px] md:text-[37px] mt-4 mr-2 md:mb-10">One Meme Coin To Rule Them All</div>
              </div>
              <div className="text-center break-all md:pr-30 md:pl-10 text-[18px] md:text-[20px]">
                The mighty Choobin reigns over the crypto battlefield, incinerating all his foes. As the dragon fire burns, the Greatest Airdrop in History gathers pace. No other meme coin can survive the fiery flames. Buy and hold $Choobin to gain airdrop points and join the dragon in vanquishing his enemies!
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16 mx-5">
          <div className="relative w-full lg:w-140">
            <Image src="/images/card.png" alt="" className="hidden md:block w-full" width={560} height={290} />
            <Image src="/images/card_mobile.png" alt="" className="md:hidden w-full" width={348} height={265} />
            <div className="absolute left-0 top-0 py-10 md:py-16 px-10 md:px-17.5 bottom-0 flex flex-col justify-center">
              <div className="text-center text-[25px] md:text-[30px] font-lakki mb-3">
                Fair Launch
              </div>
              <div className="text-center text-lg md:text-[20px] leading-[29px] md:leading-[36px] font-lakki">
                Buy SChoobin on Jupiter or choobintoken.com (widget above) and fill your bags with the most rewarding token ever to grace Solana.
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-140">
            <Image src="/images/card.png" alt="" className="hidden md:block w-full" width={560} height={290} />
            <Image src="/images/card_mobile.png" alt="" className="md:hidden w-full" width={348} height={265} />
            <div className="absolute left-0 top-0 py-10 md:py-16 px-10 md:px-17.5 bottom-0 flex flex-col justify-center">
              <div className="text-center text-[25px] md:text-[30px] font-lakki mb-3">
                Hold Or Stake To Earn
              </div>
              <div className="text-center text-lg md:text-[20px] leading-[29px] md:leading-[36px] font-lakki">
                Buy and hold SChoobin to earn airdrop points and qualify for the bounty. Or buy and stake on Ethereum to qualify and earn extra APY.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full lg:w-140 ">
            <Image src="/images/card.png" alt="" className="hidden md:block w-full" width={560} height={290} />
            <Image src="/images/card_mobile.png" alt="" className="md:hidden w-full" width={348} height={265} />
            <div className="absolute left-0 top-0 py-10 md:py-16 px-10 md:px-17.5 bottom-0 flex flex-col justify-center">
              <div className="text-center text-[25px] md:text-[30px] font-lakki mb-3">
                Claim Your Airdrop
              </div>
              <div className="text-center text-lg md:text-[20px] leading-[29px] md:leading-[36px] font-lakki">
                $Choobin token holders and stakers! Prepare yourselves for the greatest airdrop in history, distributed on Solana.
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-20 md:mt-0 md:absolute bottom-0 right-0">
          <Image src="/images/unicon_blur.png" alt="" className="w-95.5" width={382} height={350} />
        </div>
      </div>
      
      <div className="max-w-wrapper mx-auto">
        <h1 className="text-center text-white font-lakki text-[30px] md:text-[45px] mb-16">
          FEATURED IN
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-4 items-center gap-11.5 justify-center mb-40">
          <Image src="/images/features/btn_previous.png" alt="" className="hidden md:block cursor-pointer" width={40} height={36} />
          <div className="flex flex-col lg:flex-row items-center gap-10.5">
            {features.map((feature, index) => (
              <Image key={index} src={`/images/features/${feature.image}`} alt="" width={feature.width} height={feature.height} />
            ))}
          </div>
          <Image src="/images/features/btn_next.png" alt="" className="mt-14 md:mt-0 rotate-90 md:rotate-0 cursor-pointer" width={40} height={36} />
        </div>
        
        <div className="flex flex-col items-center gap-8">
          <div className="relative px-5 md:px-0">
            <Image src="/images/shop_header_bg.png" alt="" width={641} height={173} className="w-175" />
            <div className="absolute top-6 md:top-[76px] left-1/2 transform -translate-x-1/2 text-[25px] leading-1 md:text-[37px] font-lakki uppercase mt-4 md:mt-6 text-center md:whitespace-nowrap">
              HOW TO BUY CHOOBIN
            </div>
          </div>
          <div className="relative w-screen lg:w-auto pr-5">
            <Image src="/images/buy_card_active.png" alt="" width={832} height={260} className="hidden lg:block w-208" />
            <Image src="/images/buy_card_active_mobile.png" alt="" width={832} height={260} className="lg:hidden w-full h-110" />
            <div className="absolute top-0 left-0 w-full pt-20 md:pt-13 pl-20 md:pl-26 pr-12">
              <div className="text-[25px] md:text-[35px] font-lakki uppercase mt-2 whitespace-nowrap">
                1. Buy and Hold
              </div>
              <div className="text-lg leading-[27px] font-lakki">
                Dive into the world of Choobin Coins. You can swap ETH, USDT or via Credit to obtain Choobin tokens. Keep your tokens in your wallet to be eligible for the airdrop! Your holdings will be tracked automatically to contribute to your airdrop points.
              </div>
            </div>
          </div>
          
          <div className="relative w-screen lg:w-auto pr-5 pl-10">
            <Image src="/images/buy_card.png" alt="" width={798} height={260} className="hidden md:block w-199.5" />
            <Image src="/images/buy_card_mobile.png" alt="" width={832} height={260} className="md:hidden w-full h-110" />
            <div className="absolute top-0 left-0 w-full pt-20 md:pt-13 pl-20 md:pl-26 pr-12">
              <div className="text-[25px] md:text-[35px] font-lakki uppercase mt-2 whitespace-nowrap">
                2. Buy and Stake
              </div>
              <div className="text-lg leading-[27px] font-lakki">
                If you don’t have Choobin coin, swap ETH, USDT or via Credit Card to complete a purchase. Once you buy your Choobin coin, your tokens will stake automatically and you will earn rewards.
              </div>
            </div>
          </div>
          
          <div className="relative w-screen lg:w-auto pr-5 pl-10">
            <Image src="/images/buy_card.png" alt="" width={798} height={260} className="hidden md:block w-199.5" />
            <Image src="/images/buy_card_mobile.png" alt="" width={832} height={260} className="md:hidden w-full h-110" />
            <div className="absolute top-0 left-0 w-full pt-20 md:pt-13 pl-20 md:pl-26 pr-12">
              <div className="text-[25px] md:text-[35px] font-lakki uppercase mt-2 whitespace-nowrap">
                3. Airdrop Signup
              </div>
              <div className="text-lg leading-[27px] font-lakki">
                Become a member of the Choobin community to earn extra points contributing towards the Choobin airdrop. You will earn more points by completing various tasks!
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="h-100 md:h-220 w-full bg-castle bg-cover bg-center"></div>
      <div className="h-215 bg-tokenomic bg-cover">
        <div className="flex justify-center mb-10 pt-40 px-5 md:px-0">
          <button className="bg-tokenomic_button bg-contain bg-no-repeat text-[25px] md:text-[40px] uppercase w-80 md:w-116 h-21 md:h-28.5 font-lakki md:pt-2">
            TOKENOMICS
          </button>
        </div>
        <div className="w-84 md:w-167 h-73 md:h-105 bg-cover bg-total_card_mobile md:bg-total_card mx-auto flex justify-center items-center">
          <div className="text-center">
            <div className="font-lakki text-[25px] md:text-[45px]">Total Supply</div>
            <div className="font-lakki text-lg md:text-[25px] mb-10 md:-mt-3">500,256,205,000</div>
            <div className="font-lakki text-[25px] md:text-[35px]">
              Smart Contract
            </div>
            <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:-mt-4 items-center">
              <span className="font-lakki text-lg md:text-[20px] md:leading-[36px] text-[#3A1C34]">Address:</span>
              <div className="flex gap-2 items-center">
                <span className="font-lakki text-base md:text-[20px] md:leading-[36px]">123d52q3ewdf46qwefdqewfeq</span>
                <Image src="/images/copy.png" alt="" className="w-7.5 h-7.5" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-100 md:h-215 flex items-center justify-center">
        <Image src="/images/troll.gif" alt="" width={520} height={577} className="w-130" />
      </div>
      
      <Footer />
    </main>
  );
}
