/* 第1—9、13—18串联单元。内容来自2026年11月18日设计稿，金额与交易均为合成案例。 */
window.CONNECTED_UNIT_DESIGNS = [
  {
    "id": "stock-bond-fund",
    "number": 1,
    "title": "股票、债券与基金",
    "heading": "买的是店的一小份，还是一张借条？",
    "meta": "第1单元",
    "keywords": "股票 债券 基金 同一家店的股票债券与基金怎样产生盈亏",
    "version": "2026-11-18.u1.1",
    "storageKey": "investment-connected-stock-bond-fund-v1",
    "goal": "根据持有的权利和实际回款分别判断盈亏，知道基金持有的资产才是收益来源。",
    "story": [
      "回到小店最初筹钱的时候。小明花10元买一股，取得一小份所有权；小红花10元买店里的债券，约定到期本息共11元。另有一个教学基金，20元资产分别买一股和一份该债券，只有1份基金、没有其他资产负债或费用。",
      "它们是三个互斥投资方案的比较，不是假定同一张证券被重复出售。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "若股票最后卖8元，持有期收到分红1元，股票合计收回9元，亏1元。债券若按约收到11元，赚1元。基金的底层资产合计9＋11＝20元，基金这一份回本。约定偿付不是保证偿付，股票分红也不是必然。",
          "基金像篮子，装进什么决定它承受哪些涨跌和偿付风险。"
        ]
      }
    ],
    "reviewText": "每次先问买到什么权利，再问实际拿回多少。基金不是独立于底层资产的免费收益来源。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Investor.gov 股票教育页",
        "url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks",
        "checked": "2026-11-18"
      },
      {
        "title": "Investor.gov 公司债教育页",
        "url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products",
        "checked": "2026-11-18"
      }
    ],
    "context": "回到小店最初筹钱的时候。小明花10元买一股，取得一小份所有权；小红花10元买店里的债券，约定到期本息共11元。另有一个教学基金，20元资产分别买一股和一份该债券，只有1份基金、没有其他资产负债或费用。它们是三个互斥投资方案的比较，不是假定同一张证券被重复出售。\n若股票最后卖8元，持有期收到分红1元，股票合计收回9元，亏1元。债券若按约收到11元，赚1元。基金的底层资产合计9＋11＝20元，基金这一份回本。约定偿付不是保证偿付，股票分红也不是必然。\n基金像篮子，装进什么决定它承受哪些涨跌和偿付风险。",
    "questions": [
      {
        "id": "practice-1",
        "title": "预期回款与实际回款",
        "story": [
          "沿用示范：股票买10元、分红1元、卖8元；债券买10元、实际足额收到11元；基金20元只持有这两项各一份、费用0。分别判断三种方案的总盈亏。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "股票盈亏",
            "answer": "option-2",
            "explanation": "8＋1−10＝−1元。",
            "options": [
              {
                "id": "option-1",
                "text": "−2元",
                "feedback": "漏掉1元分红。"
              },
              {
                "id": "option-2",
                "text": "−1元"
              },
              {
                "id": "option-3",
                "text": "＋1元",
                "feedback": "只看分红，漏掉价差。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "债券盈亏",
            "answer": "option-3",
            "explanation": "11−10＝1元。",
            "options": [
              {
                "id": "option-1",
                "text": "＋11元",
                "feedback": "把本金也算收益。"
              },
              {
                "id": "option-2",
                "text": "＋10元",
                "feedback": "只算回收本金。"
              },
              {
                "id": "option-3",
                "text": "＋1元"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "基金盈亏",
            "answer": "option-1",
            "explanation": "9＋11−20＝0元。",
            "options": [
              {
                "id": "option-1",
                "text": "0元"
              },
              {
                "id": "option-2",
                "text": "＋2元",
                "feedback": "误以为两项都赚钱。"
              },
              {
                "id": "option-3",
                "text": "−1元",
                "feedback": "漏掉债券的1元盈利。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "基金为什么不是凭空多赚一笔钱？",
          "options": [
            {
              "id": "option-1",
              "text": "基金汇总底层资产价值与收益，再考虑费用，不自动多出保证回报。"
            },
            {
              "id": "option-2",
              "text": "基金经理必须补齐所有亏损。",
              "feedback": "没有这种补亏条件。"
            },
            {
              "id": "option-3",
              "text": "基金名叫投资篮子，所以一定保本。",
              "feedback": "篮子也可能装着亏损资产。"
            }
          ],
          "answer": "option-1",
          "explanation": "本题资产合计恰好20元。"
        },
        "explanation": [
          "先算每项实际回款再减投入，不把本金当收益。本题只能说明给定结果，不能拿一次回本证明基金普遍保本。"
        ]
      },
      {
        "id": "practice-2",
        "title": "底层资产一起亏损",
        "story": [
          "独立不利情景：股票仍买10元，没有分红，最后只能卖6元；债券买10元，到期实际只收回7元，之后不再有回款。基金仍各持一份，初始20元，费用0。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "股票盈亏",
            "answer": "option-1",
            "explanation": "6−10＝−4元。",
            "options": [
              {
                "id": "option-1",
                "text": "−4元"
              },
              {
                "id": "option-2",
                "text": "−6元",
                "feedback": "把回收额当损失。"
              },
              {
                "id": "option-3",
                "text": "0元",
                "feedback": "忽略跌价。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "债券盈亏",
            "answer": "option-2",
            "explanation": "7−10＝−3元。",
            "options": [
              {
                "id": "option-1",
                "text": "＋1元",
                "feedback": "把承诺当实际偿付。"
              },
              {
                "id": "option-2",
                "text": "−3元"
              },
              {
                "id": "option-3",
                "text": "−7元",
                "feedback": "把回收额当损失。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "基金盈亏",
            "answer": "option-3",
            "explanation": "6＋7−20＝−7元。",
            "options": [
              {
                "id": "option-1",
                "text": "−3元",
                "feedback": "漏股票损失。"
              },
              {
                "id": "option-2",
                "text": "−4元",
                "feedback": "漏债券损失。"
              },
              {
                "id": "option-3",
                "text": "−7元"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "这次基金为什么也亏？",
          "options": [
            {
              "id": "option-1",
              "text": "债券写了还款金额就不可能亏。",
              "feedback": "实际只还7元。"
            },
            {
              "id": "option-2",
              "text": "同一家店相关资产都受损，基金把损失汇总，名称不会消除风险。"
            },
            {
              "id": "option-3",
              "text": "基金应把本金再加回一次。",
              "feedback": "投入与回款已各计一次。"
            }
          ],
          "answer": "option-2",
          "explanation": "要追踪底层资产。"
        },
        "explanation": [
          "本题给出实际偿付，不要求预测破产清偿顺序；不把股票、债券的法律区别简化成安全与危险两个绝对标签。"
        ]
      }
    ]
  },
  {
    "id": "returns-fees-inflation",
    "number": 2,
    "title": "收益、费用与购买力",
    "heading": "投资赚了钱，能多买多少东西？",
    "meta": "第2单元",
    "keywords": "收益率 手续费 复利 累计收益率 年化收益率 通货膨胀 实际收益与购买力 收益经过时间费用与物价后还剩什么",
    "version": "2026-11-18.u2.1",
    "storageKey": "investment-connected-returns-fees-inflation-v1",
    "goal": "把期末回款与初始投入、持有时间、费用和购买力分开核对。",
    "story": [
      "小明用100元投资，以下固定回报只是假设，不是任何产品承诺。若每年赚10%且不取出、没有费用，第一年110元，第二年121元。两年累计收益率21%，等效年化10%，用每年乘1.1可以验算，不把21%除2当复合年化。",
      "若同一种商品也每年涨价10%，单价由1元到1.21元，121元仍只买100份，购买力没有增加。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "收益率先用实际收益除最初投入。费用会减少实际到手金额；比较年化要对齐期间，并处理资金进出条件。复利的作用来自上一期留下的收益继续参与计算，不是每期自动保证获利。实际购买力用期末钱除期末商品价格，与最初可买数量比较。"
        ]
      }
    ],
    "reviewText": "统一投入、回款、费用、时间和物价口径，再比较收益；固定10%是验算假设，不是预测。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "SEC 基金费用公告 2025年7月23日",
        "url": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin",
        "checked": "2026-11-18"
      },
      {
        "title": "Investor.gov 投资教育页",
        "url": "https://www.investor.gov/introduction-investing",
        "checked": "2026-11-18"
      }
    ],
    "context": "小明用100元投资，以下固定回报只是假设，不是任何产品承诺。若每年赚10%且不取出、没有费用，第一年110元，第二年121元。两年累计收益率21%，等效年化10%，用每年乘1.1可以验算，不把21%除2当复合年化。若同一种商品也每年涨价10%，单价由1元到1.21元，121元仍只买100份，购买力没有增加。\n收益率先用实际收益除最初投入。费用会减少实际到手金额；比较年化要对齐期间，并处理资金进出条件。复利的作用来自上一期留下的收益继续参与计算，不是每期自动保证获利。实际购买力用期末钱除期末商品价格，与最初可买数量比较。",
    "questions": [
      {
        "id": "practice-1",
        "title": "扣完费用，再看购买力",
        "story": [
          "独立情景：100元两年变121元，期末一次扣11元费用，没有其他资金进出。本题商品单价两年总共由10元涨到11元，不能沿用示范中每年10%的物价假设。判断净到手、累计收益率及能买的商品数量。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "净到手",
            "answer": "option-2",
            "explanation": "121−11＝110元。",
            "options": [
              {
                "id": "option-1",
                "text": "121元",
                "feedback": "未扣费用。"
              },
              {
                "id": "option-2",
                "text": "110元"
              },
              {
                "id": "option-3",
                "text": "100元",
                "feedback": "误以为费用吃掉全部收益。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "净累计收益率",
            "answer": "option-3",
            "explanation": "(110−100)÷100＝10%。",
            "options": [
              {
                "id": "option-1",
                "text": "21%",
                "feedback": "用扣费前金额。"
              },
              {
                "id": "option-2",
                "text": "11%",
                "feedback": "把费用金额当收益比例。"
              },
              {
                "id": "option-3",
                "text": "10%"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "可买商品数量",
            "answer": "option-1",
            "explanation": "110÷11＝10份，与最初100÷10相同。",
            "options": [
              {
                "id": "option-1",
                "text": "10份"
              },
              {
                "id": "option-2",
                "text": "11份",
                "feedback": "沿用旧商品价格10元。"
              },
              {
                "id": "option-3",
                "text": "12.1份",
                "feedback": "用未扣费121元除旧商品价格10元，漏掉费用和物价两个变化。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "名义赚10%而购买力没增加，为什么？",
          "options": [
            {
              "id": "option-1",
              "text": "费用与物价在本例抵消了购买力增长，不能只看扣费前收益。"
            },
            {
              "id": "option-2",
              "text": "名义盈利就一定能多买东西。",
              "feedback": "本题反例可直接验算。"
            },
            {
              "id": "option-3",
              "text": "物价上涨会自动提高投资净值。",
              "feedback": "没有这种自动补偿。"
            }
          ],
          "answer": "option-1",
          "explanation": "实际可买数量仍10份。"
        },
        "explanation": [
          "121先扣11再比较投入与商品价格。不能用121元的毛收益与110元的净回款混算。本题没有要求对含中途资金流的投资计算年化。"
        ]
      },
      {
        "id": "practice-2",
        "title": "取出收益后，还有多少复利？",
        "story": [
          "回到固定每年10%的两年示范。第一年赚10元后立即取出放着，不再产生收益；剩余100元继续投资。第二年结束，分别判断参与第二年计算的钱、第二年收益和包括已取出现金的总财富。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "第二年参与金额",
            "answer": "option-2",
            "explanation": "100元本金继续参与。",
            "options": [
              {
                "id": "option-1",
                "text": "110元",
                "feedback": "10元已取出。"
              },
              {
                "id": "option-2",
                "text": "100元"
              },
              {
                "id": "option-3",
                "text": "90元",
                "feedback": "取走收益没有再扣本金。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "第二年收益",
            "answer": "option-3",
            "explanation": "100×10%＝10元。",
            "options": [
              {
                "id": "option-1",
                "text": "11元",
                "feedback": "仍假定收益留在里面。"
              },
              {
                "id": "option-2",
                "text": "20元",
                "feedback": "把两年的收益相加。"
              },
              {
                "id": "option-3",
                "text": "10元"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "总财富",
            "answer": "option-1",
            "explanation": "投资110＋已取现金10＝120元。",
            "options": [
              {
                "id": "option-1",
                "text": "120元"
              },
              {
                "id": "option-2",
                "text": "110元",
                "feedback": "漏掉已取出的10元。"
              },
              {
                "id": "option-3",
                "text": "121元",
                "feedback": "忽略取走收益失去的1元复利。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "与收益都留下的121元相比，少1元来自什么？",
          "options": [
            {
              "id": "option-1",
              "text": "基金一定额外扣1元。",
              "feedback": "本题没有这笔费用。"
            },
            {
              "id": "option-2",
              "text": "取出的首年10元没有参加第二年的10%计算。"
            },
            {
              "id": "option-3",
              "text": "两年必须把收益率直接相加。",
              "feedback": "复利需要按变化后的基数逐期算。"
            }
          ],
          "answer": "option-2",
          "explanation": "10×10%＝1元。"
        },
        "explanation": [
          "本题不把120元直接代入无中途资金进出的年化公式。取款时点会影响计算，单看投资账户期末110元会漏掉现金。"
        ]
      }
    ]
  },
  {
    "id": "drawdown-and-horizon",
    "number": 3,
    "title": "收益、回撤与投资期限",
    "heading": "起点和终点相同，中间的风险一样吗？",
    "meta": "第3单元",
    "keywords": "价格波动 亏损后怎样回本 回撤 最大回撤 投资期限 同样的最终结果与不同的下跌过程",
    "version": "2026-11-18.u3.1",
    "storageKey": "investment-connected-drawdown-and-horizon-v1",
    "goal": "区分相对买价的盈亏与相对先前高点的回撤，并把用钱时间纳入判断。",
    "story": [
      "小明各用100元比较两条已发生的价格路径：甲100→80→100，乙100→50→100，没有分红、费用或资金进出。最后都回到100，不代表过程相同。甲最大回撤20%，乙50%；乙从50回100要涨100%，不是涨50%。",
      "示范只是已发生路径，不保证未来重复。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "回撤分母是此前高点；个人盈亏分母是自己的买价。波动描述价格起伏，最大回撤只记录选定期间最深的先高后低跌幅，两者不是同义词。投资期限关系到何时必须拿钱使用，不是期限长就保证回本。"
        ]
      }
    ],
    "reviewText": "先问与买价还是高点比较，再问钱何时必须使用。最终收益相同，过程与资金压力仍可不同。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Investor.gov 配置与期限教育页 无标注更新日",
        "url": "https://www.investor.gov/introduction-investing/getting-started/asset-allocation",
        "checked": "2026-11-18"
      }
    ],
    "context": "小明各用100元比较两条已发生的价格路径：甲100→80→100，乙100→50→100，没有分红、费用或资金进出。最后都回到100，不代表过程相同。甲最大回撤20%，乙50%；乙从50回100要涨100%，不是涨50%。示范只是已发生路径，不保证未来重复。\n回撤分母是此前高点；个人盈亏分母是自己的买价。波动描述价格起伏，最大回撤只记录选定期间最深的先高后低跌幅，两者不是同义词。投资期限关系到何时必须拿钱使用，不是期限长就保证回本。",
    "questions": [
      {
        "id": "practice-1",
        "title": "同一次跌价，两种比较",
        "story": [
          "另一条已发生路径为100→120→90→120元，100元买入，期间无其他收支。判断期末累计收益率、区间最大回撤及90元低点相对买价的盈亏率。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "期末累计收益率",
            "answer": "option-1",
            "explanation": "(120−100)÷100＝20%。",
            "options": [
              {
                "id": "option-1",
                "text": "20%"
              },
              {
                "id": "option-2",
                "text": "0%",
                "feedback": "把从高点恢复当成没赚钱。"
              },
              {
                "id": "option-3",
                "text": "30%",
                "feedback": "把低点90至期末120的差30除以最初100，遗漏真实买入价比较。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "最大回撤",
            "answer": "option-2",
            "explanation": "(120−90)÷120＝25%。",
            "options": [
              {
                "id": "option-1",
                "text": "10%",
                "feedback": "这是90相对100的跌幅。"
              },
              {
                "id": "option-2",
                "text": "25%"
              },
              {
                "id": "option-3",
                "text": "30%",
                "feedback": "用100作分母。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "90元相对买价盈亏率",
            "answer": "option-3",
            "explanation": "(90−100)÷100＝−10%。",
            "options": [
              {
                "id": "option-1",
                "text": "−25%",
                "feedback": "把回撤当个人盈亏。"
              },
              {
                "id": "option-2",
                "text": "＋10%",
                "feedback": "方向弄反。"
              },
              {
                "id": "option-3",
                "text": "−10%"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "回撤25%与个人亏10%为何可同时成立？",
          "options": [
            {
              "id": "option-1",
              "text": "同一次下跌只能有一个百分数。",
              "feedback": "比较基准不同。"
            },
            {
              "id": "option-2",
              "text": "回撤用先前高点120，个人盈亏用买价100，分母和比较对象不同。"
            },
            {
              "id": "option-3",
              "text": "回撤衡量实际已支付费用。",
              "feedback": "本题费用为0。"
            }
          ],
          "answer": "option-2",
          "explanation": "需先说明与谁相比。"
        },
        "explanation": [
          "从120跌90是30元，除120；相对100买价只跌10元，除100。不能从期末盈利20%推断中间没有风险。"
        ]
      },
      {
        "id": "practice-2",
        "title": "今天就需要用钱",
        "story": [
          "重新只观察到100元投资跌至50元，未来价格未知。小明今天必须拿出80元付款，只有这笔投资，没有其他资金；能按50元全部卖出，费用0。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "今天最多可拿回",
            "answer": "option-3",
            "explanation": "按题给可成交价50元。",
            "options": [
              {
                "id": "option-1",
                "text": "100元",
                "feedback": "这是原投入，不是现值。"
              },
              {
                "id": "option-2",
                "text": "80元",
                "feedback": "需要80不代表能卖80。"
              },
              {
                "id": "option-3",
                "text": "50元"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "付款缺口",
            "answer": "option-1",
            "explanation": "80−50＝30元。",
            "options": [
              {
                "id": "option-1",
                "text": "30元"
              },
              {
                "id": "option-2",
                "text": "50元",
                "feedback": "把投资损失当付款缺口。"
              },
              {
                "id": "option-3",
                "text": "0元",
                "feedback": "忽略用钱需求。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "把期限延长是否保证回本",
            "answer": "option-2",
            "explanation": "更多等待时间不是收益承诺。",
            "options": [
              {
                "id": "option-1",
                "text": "保证",
                "feedback": "未来价格未知。"
              },
              {
                "id": "option-2",
                "text": "不保证"
              },
              {
                "id": "option-3",
                "text": "只要不卖就无风险",
                "feedback": "未实现损失也影响可用资金与风险。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "为什么用钱时间重要？",
          "options": [
            {
              "id": "option-1",
              "text": "必须用钱时可用资金受当时价格约束，不能拿未知的未来回升代替。"
            },
            {
              "id": "option-2",
              "text": "未来总会复制示范回到100。",
              "feedback": "历史路径不是保证。"
            },
            {
              "id": "option-3",
              "text": "只要账面没卖就能付款80。",
              "feedback": "付款需要实际可用资金。"
            }
          ],
          "answer": "option-1",
          "explanation": "本题今天最多50元。"
        },
        "explanation": [
          "今天缺30元已可确定；未来会不会回本未知。不要把未知未来变成确定回升，也不把期限短自动等同某种固定亏损概率。"
        ]
      }
    ]
  },
  {
    "id": "overlapping-holdings",
    "number": 4,
    "title": "持仓重叠与分散投资",
    "heading": "买了两只基金，钱真的分开了吗？",
    "meta": "第4单元",
    "keywords": "分散投资 持仓占比 持仓集中 持仓重叠 行业风险 基金数量与真正承担的共同风险",
    "version": "2026-11-18.u4.1",
    "storageKey": "investment-connected-overlapping-holdings-v1",
    "goal": "穿透基金持仓计算实际暴露，区分名字数量与共同风险。",
    "story": [
      "小明比较多个投资篮子。持有两只基金，不代表买到两套互不相同的资产。若各投50元，两只基金都80%持有A店，合起来仍有80元落在A店上，A占80%。A跌一半而其他资产不变，总损失40元，剩60元。",
      "持仓占比、重叠和集中需要按价值算，不能只数名字。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "另一组基金甲持A60%、B40%，乙持A40%、C60%。各投50元，穿透后A50元、B20元、C30元。分散可以减少单一资产影响，不能消除全市场或行业共同冲击。本例假定两基金同一时点披露完全准确、持仓不调整、费用0；真实披露时点与持仓变化需要另核。"
        ]
      }
    ],
    "reviewText": "先看实际钱放在哪里，再看哪些资产会受同一件事影响。持仓多不等于已经分散。",
    "recall": "回顾第1单元：基金最终承担的是底层资产的风险。这里多问一步，两个基金有多少资金放在同一家店？",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Investor.gov 配置与分散教育页",
        "url": "https://www.investor.gov/introduction-investing/getting-started/asset-allocation",
        "checked": "2026-11-18"
      }
    ],
    "context": "小明比较多个投资篮子。持有两只基金，不代表买到两套互不相同的资产。若各投50元，两只基金都80%持有A店，合起来仍有80元落在A店上，A占80%。A跌一半而其他资产不变，总损失40元，剩60元。持仓占比、重叠和集中需要按价值算，不能只数名字。\n另一组基金甲持A60%、B40%，乙持A40%、C60%。各投50元，穿透后A50元、B20元、C30元。分散可以减少单一资产影响，不能消除全市场或行业共同冲击。本例假定两基金同一时点披露完全准确、持仓不调整、费用0；真实披露时点与持仓变化需要另核。",
    "questions": [
      {
        "id": "practice-1",
        "title": "按金额看重叠持仓",
        "story": [
          "甲基金投20元、乙基金投80元。甲持A60%和B40%，乙持A40%和C60%。随后只有A跌50%，B和C价值不变。判断最初A实际暴露、组合损失和期末总额。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "最初A实际暴露",
            "answer": "option-2",
            "explanation": "20×60%＋80×40%＝44元。",
            "options": [
              {
                "id": "option-1",
                "text": "50元",
                "feedback": "误按两基金各一半投入。"
              },
              {
                "id": "option-2",
                "text": "44元"
              },
              {
                "id": "option-3",
                "text": "40元",
                "feedback": "把乙基金40%的A持仓比例直接套到全部100元，而非分别穿透。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "组合损失",
            "answer": "option-1",
            "explanation": "44×50%＝22元。",
            "options": [
              {
                "id": "option-1",
                "text": "22元"
              },
              {
                "id": "option-2",
                "text": "50元",
                "feedback": "把整组100元都当A。"
              },
              {
                "id": "option-3",
                "text": "44元",
                "feedback": "把A全部价值当损失。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "期末总额",
            "answer": "option-3",
            "explanation": "100−22＝78元。",
            "options": [
              {
                "id": "option-1",
                "text": "56元",
                "feedback": "扣掉全部A而非跌幅。"
              },
              {
                "id": "option-2",
                "text": "50元",
                "feedback": "误认为全部100元都跟A一起跌50%。"
              },
              {
                "id": "option-3",
                "text": "78元"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "为什么必须穿透持仓？",
          "options": [
            {
              "id": "option-1",
              "text": "买两基金就保证各自风险抵消。",
              "feedback": "本题有共同A暴露。"
            },
            {
              "id": "option-2",
              "text": "基金数量相同就意味着实际持仓一样。",
              "feedback": "资金权重与底层比例都重要。"
            },
            {
              "id": "option-3",
              "text": "同一家公司可能在多个篮子中重复出现，要按投入与持仓权重汇总。"
            }
          ],
          "answer": "option-3",
          "explanation": "不能只数基金个数。"
        },
        "explanation": [
          "A暴露是两段资金权重相加；B为8元、C48元。A跌后22＋8＋48＝78元，可以从底层再验算。"
        ]
      },
      {
        "id": "practice-2",
        "title": "不同店遇到同一场冷夏",
        "story": [
          "甲组合50元A冰淇淋店、50元B冰淇淋店；乙组合50元A、50元C另一行业。假设一次冷夏只让A、B各跌40%，C不变，无费用、分红或调整。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "甲期末总额",
            "answer": "option-1",
            "explanation": "30＋30＝60元。",
            "options": [
              {
                "id": "option-1",
                "text": "60元"
              },
              {
                "id": "option-2",
                "text": "80元",
                "feedback": "只算了一家跌价。"
              },
              {
                "id": "option-3",
                "text": "100元",
                "feedback": "忽略冲击。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "乙期末总额",
            "answer": "option-2",
            "explanation": "30＋50＝80元。",
            "options": [
              {
                "id": "option-1",
                "text": "60元",
                "feedback": "把C也当作下跌。"
              },
              {
                "id": "option-2",
                "text": "80元"
              },
              {
                "id": "option-3",
                "text": "50元",
                "feedback": "漏掉A剩余价值。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "乙是否已消除全部风险",
            "answer": "option-3",
            "explanation": "它仍暴露A，也仍持有C的风险。",
            "options": [
              {
                "id": "option-1",
                "text": "是",
                "feedback": "分散不消除所有风险。"
              },
              {
                "id": "option-2",
                "text": "只要C这次不跌就永不跌",
                "feedback": "本次题设不是未来保证。"
              },
              {
                "id": "option-3",
                "text": "否"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "两组合都只有两个名字，为何损失不同？",
          "options": [
            {
              "id": "option-1",
              "text": "甲两家共享行业冲击，乙的C在本题假设中没有同样下跌。"
            },
            {
              "id": "option-2",
              "text": "两家不同公司不可能受同一因素影响。",
              "feedback": "不同公司可共享行业风险。"
            },
            {
              "id": "option-3",
              "text": "C属于另一行业就保证永不亏。",
              "feedback": "本题不支持这种保证。"
            }
          ],
          "answer": "option-1",
          "explanation": "要看共同驱动，不只是名字。"
        },
        "explanation": [
          "同样的数量、同样的50/50权重，行业暴露仍可不同。不把这次设定当成现实相关系数的估计。"
        ]
      }
    ]
  },
  {
    "id": "portfolio-rebalancing",
    "number": 5,
    "title": "资产配置与再平衡",
    "heading": "股票涨了，原来的配置还在吗？",
    "meta": "第5单元",
    "keywords": "资产配置 再平衡 资产配置怎样漂移与恢复",
    "version": "2026-11-18.u5.1",
    "storageKey": "investment-connected-portfolio-rebalancing-v1",
    "goal": "区分目标比例、市场漂移与再平衡，理解新资金不会自动成为投资收益。",
    "story": [
      "小明的教学计划是股票60元、债券40元，共100元；60/40只是给定练习目标，不是推荐给所有人的比例。股票上涨50%变90元，债券仍40元，总130元。股票占比90÷130约69.23%，已不是60%。",
      "资产配置的选择还要结合前面学过的期限和风险承受条件。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "若无新增资金、按当前价值成交且费用0，恢复60/40需要股票78元、债券52元，即卖12元股票、买12元债券。钱在两类资产间转移，总额仍130元，再平衡本身没有凭空创造收益，也不保证下次涨跌。"
        ]
      }
    ],
    "reviewText": "比例由当前价值决定，执行目标不等于预测准确。必须用钱的期限与可承受损失仍应先于比例选择。",
    "recall": "回顾第3、4单元：钱什么时候要用、实际押在哪些资产上，会影响怎样理解配置比例。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Investor.gov 配置与再平衡教育页",
        "url": "https://www.investor.gov/introduction-investing/getting-started/asset-allocation",
        "checked": "2026-11-18"
      }
    ],
    "context": "小明的教学计划是股票60元、债券40元，共100元；60/40只是给定练习目标，不是推荐给所有人的比例。股票上涨50%变90元，债券仍40元，总130元。股票占比90÷130约69.23%，已不是60%。资产配置的选择还要结合前面学过的期限和风险承受条件。\n若无新增资金、按当前价值成交且费用0，恢复60/40需要股票78元、债券52元，即卖12元股票、买12元债券。钱在两类资产间转移，总额仍130元，再平衡本身没有凭空创造收益，也不保证下次涨跌。",
    "questions": [
      {
        "id": "practice-1",
        "title": "用新投入恢复比例",
        "story": [
          "沿用涨后股票90元、债券40元。现在外部另投入20元，全部买债券，成交价不变、费用0。目标仍60/40。判断新总额、股票占比和此时还需卖出多少股票才能到目标。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "新总额",
            "answer": "option-2",
            "explanation": "90＋40＋20＝150元。",
            "options": [
              {
                "id": "option-1",
                "text": "130元",
                "feedback": "漏掉新增20元。"
              },
              {
                "id": "option-2",
                "text": "150元"
              },
              {
                "id": "option-3",
                "text": "170元",
                "feedback": "重复加入新资金。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "股票占比",
            "answer": "option-1",
            "explanation": "90÷150＝60%。",
            "options": [
              {
                "id": "option-1",
                "text": "60%"
              },
              {
                "id": "option-2",
                "text": "69.23%",
                "feedback": "沿用未追加前的分母。"
              },
              {
                "id": "option-3",
                "text": "90%",
                "feedback": "漏掉其他资产。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "还需卖出股票",
            "answer": "option-3",
            "explanation": "已达到目标。",
            "options": [
              {
                "id": "option-1",
                "text": "12元",
                "feedback": "沿用无新增资金的方案。"
              },
              {
                "id": "option-2",
                "text": "20元",
                "feedback": "把新增金额当调仓金额。"
              },
              {
                "id": "option-3",
                "text": "0元"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "新增20元能说明原投资赚了20元吗？",
          "options": [
            {
              "id": "option-1",
              "text": "能，账户变大就是赚了。",
              "feedback": "账户变化包含外部资金。"
            },
            {
              "id": "option-2",
              "text": "不能，新投入改变规模和比例，不是原投资自身收益。"
            },
            {
              "id": "option-3",
              "text": "只有卖出才会改变占比。",
              "feedback": "新增债券也改变分母与权重。"
            }
          ],
          "answer": "option-2",
          "explanation": "应分开市场变化与投入。"
        },
        "explanation": [
          "本题通过新资金恢复目标，无需卖股。不能从150−100得50%当作原组合的无资金流收益。"
        ]
      },
      {
        "id": "practice-2",
        "title": "下跌后怎样恢复目标？",
        "story": [
          "独立下跌情景：从最初股票60元、债券40元开始，股票跌50%到30元、债券仍40元。无追加或取款。按当前价值恢复60/40，允许分割交易，费用0。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "恢复后股票目标金额",
            "answer": "option-2",
            "explanation": "70×60%＝42元。",
            "options": [
              {
                "id": "option-1",
                "text": "30元",
                "feedback": "没有恢复目标。"
              },
              {
                "id": "option-2",
                "text": "42元"
              },
              {
                "id": "option-3",
                "text": "60元",
                "feedback": "用最初总额100元作分母。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "应买入股票金额",
            "answer": "option-1",
            "explanation": "42−30＝12元，由卖债券12元提供。",
            "options": [
              {
                "id": "option-1",
                "text": "12元"
              },
              {
                "id": "option-2",
                "text": "−12元 即卖12元",
                "feedback": "方向反了。"
              },
              {
                "id": "option-3",
                "text": "30元",
                "feedback": "试图回到原金额而非目标比例。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "调整后总额",
            "answer": "option-3",
            "explanation": "资产只是在内部转换。",
            "options": [
              {
                "id": "option-1",
                "text": "100元",
                "feedback": "再平衡不补回市场损失。"
              },
              {
                "id": "option-2",
                "text": "82元",
                "feedback": "把调入资金重复计入总额。"
              },
              {
                "id": "option-3",
                "text": "70元"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "这次买入下跌资产意味着什么？",
          "options": [
            {
              "id": "option-1",
              "text": "已知股票接下来一定反弹。",
              "feedback": "本题没有给未来价格。"
            },
            {
              "id": "option-2",
              "text": "按既定目标恢复比例，会改变风险暴露，但不是对未来反弹的保证。"
            },
            {
              "id": "option-3",
              "text": "再平衡保证马上回本。",
              "feedback": "总额仍70元。"
            }
          ],
          "answer": "option-2",
          "explanation": "动作与预测应分开。"
        },
        "explanation": [
          "债券40−12＝28元，与股票42元合计70元。相同目标遇上涨或下跌时，调仓方向可相反。"
        ]
      }
    ]
  },
  {
    "id": "fund-nav-and-flows",
    "number": 6,
    "title": "基金净值、份额与规模",
    "heading": "基金规模变大，每份就更值钱吗？",
    "meta": "第6单元",
    "keywords": "基金单位净值 赎回 流动性 基金规模 基金资金净流入 基金净值份数规模与资金进出",
    "version": "2026-11-18.u6.1",
    "storageKey": "investment-connected-fund-nav-and-flows-v1",
    "goal": "追踪资产价值与发行赎回份额，识别规模增长不等于原持有人获利。",
    "story": [
      "这是按净值申赎的教学开放式基金，不是交易所ETF价格模型。初始净资产100元、10份，每份净值10元。底层涨到120元、份数未变，净值12元。随后有人按12元投入30元，发行2.5份：净资产150元、12.5份，净值仍12元。",
      "所有题设申赎按明确给定净值成交，无费用、税或价格冲击，允许小数份额。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "净值＝净资产÷份数；规模增长既可能来自底层涨价，也可能来自资金净流入。净流入是申购资金减赎回资金，不能把资产涨价混进去。赎回换现金还需按产品规则结算，能算出金额不代表马上到账；真实流动性和暂停等规则另查具体产品，本题计算已给定可成交与足够现金条件。"
        ]
      }
    ],
    "reviewText": "总资产、总份数、单位净值和个人持仓要分别记；规模增长可能伴随老持有人亏损。",
    "recall": "回顾第2单元：账户变大时，先分清有多少来自新投入，有多少来自投资盈亏。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Investor.gov 共同基金教育页 无标注更新日",
        "url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-funds-etfs/mutual-funds",
        "checked": "2026-11-18"
      },
      {
        "title": "SEC 基金费用公告 2025年7月23日",
        "url": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin",
        "checked": "2026-11-18"
      }
    ],
    "context": "这是按净值申赎的教学开放式基金，不是交易所ETF价格模型。初始净资产100元、10份，每份净值10元。底层涨到120元、份数未变，净值12元。随后有人按12元投入30元，发行2.5份：净资产150元、12.5份，净值仍12元。所有题设申赎按明确给定净值成交，无费用、税或价格冲击，允许小数份额。\n净值＝净资产÷份数；规模增长既可能来自底层涨价，也可能来自资金净流入。净流入是申购资金减赎回资金，不能把资产涨价混进去。赎回换现金还需按产品规则结算，能算出金额不代表马上到账；真实流动性和暂停等规则另查具体产品，本题计算已给定可成交与足够现金条件。",
    "questions": [
      {
        "id": "practice-1",
        "title": "赎回时哪几个数会变？",
        "story": [
          "从净资产150元、12.5份、净值12元出发。投资者赎回2份，基金有足够现金，按12元支付，无其他变化。判断赎回后净资产、总份数和单位净值。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "基金净资产",
            "answer": "option-1",
            "explanation": "150−2×12＝126元。",
            "options": [
              {
                "id": "option-1",
                "text": "126元"
              },
              {
                "id": "option-2",
                "text": "148元",
                "feedback": "把份数当金额扣。"
              },
              {
                "id": "option-3",
                "text": "150元",
                "feedback": "忽略支付现金。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "总份数",
            "answer": "option-2",
            "explanation": "12.5−2＝10.5。",
            "options": [
              {
                "id": "option-1",
                "text": "12.5份",
                "feedback": "未注销赎回份额。"
              },
              {
                "id": "option-2",
                "text": "10.5份"
              },
              {
                "id": "option-3",
                "text": "2份",
                "feedback": "把赎回份数当剩余份数。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "单位净值",
            "answer": "option-3",
            "explanation": "126÷10.5＝12元。",
            "options": [
              {
                "id": "option-1",
                "text": "10元",
                "feedback": "沿用最初净值。"
              },
              {
                "id": "option-2",
                "text": "10.5元",
                "feedback": "把份数当净值。"
              },
              {
                "id": "option-3",
                "text": "12元"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "规模减少24元是否证明剩余持有人亏24元？",
          "options": [
            {
              "id": "option-1",
              "text": "是，规模下降就是亏损。",
              "feedback": "规模包含资金进出。"
            },
            {
              "id": "option-2",
              "text": "不是，本题资产和份数同比例减少，单位净值不变。"
            },
            {
              "id": "option-3",
              "text": "赎回不会减少基金现金。",
              "feedback": "本题确实支付24元。"
            }
          ],
          "answer": "option-2",
          "explanation": "剩余每份仍12元。"
        },
        "explanation": [
          "申赎改变资产与份数，不自动产生收益或损失。现实若另有冲击或费用，需另计；不能把本题无冲击条件推广成所有赎回均无影响。"
        ]
      },
      {
        "id": "practice-2",
        "title": "基金变大，老持有人却亏了",
        "story": [
          "独立情景从净资产100元、10份开始。先发生底层价格损失20元；之后新投资者按损失后的净值投入40元。无费用，老持有人一直持10份。判断最终规模、最终净值及老持仓价值。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "最终基金规模",
            "answer": "option-1",
            "explanation": "100−20＋40＝120元。",
            "options": [
              {
                "id": "option-1",
                "text": "120元"
              },
              {
                "id": "option-2",
                "text": "140元",
                "feedback": "漏掉价格损失。"
              },
              {
                "id": "option-3",
                "text": "80元",
                "feedback": "漏掉新资金。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "最终单位净值",
            "answer": "option-2",
            "explanation": "损失后净值8元，新发5份，120÷15＝8。",
            "options": [
              {
                "id": "option-1",
                "text": "12元",
                "feedback": "未增加新发行份额。"
              },
              {
                "id": "option-2",
                "text": "8元"
              },
              {
                "id": "option-3",
                "text": "10元",
                "feedback": "误以为申购自动补回损失。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "老持仓价值",
            "answer": "option-3",
            "explanation": "10×8＝80元。",
            "options": [
              {
                "id": "option-1",
                "text": "100元",
                "feedback": "忽略单位净值下跌。"
              },
              {
                "id": "option-2",
                "text": "120元",
                "feedback": "把全部基金规模当老持仓。"
              },
              {
                "id": "option-3",
                "text": "80元"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "规模由100增到120，为什么老持有人仍亏？",
          "options": [
            {
              "id": "option-1",
              "text": "净流入40元与底层损失20元同时发生，新资金不补偿旧份额损失。"
            },
            {
              "id": "option-2",
              "text": "规模变大就要求老份额净值上涨。",
              "feedback": "份数也增加了。"
            },
            {
              "id": "option-3",
              "text": "新投资者的钱全部送给老持有人。",
              "feedback": "新投资者按净值取得5份。"
            }
          ],
          "answer": "option-1",
          "explanation": "规模与每份价值要分开。"
        },
        "explanation": [
          "先算损失后80÷10＝8元，再算40÷8＝5新份，最后规模120、份数15、净值8。顺序是题目条件，不能倒过来用10元发份额。"
        ]
      }
    ]
  },
  {
    "id": "fund-contributions-dividends",
    "number": 7,
    "title": "定投、分红与再投资",
    "heading": "多买到几份，就等于赚到钱吗？",
    "meta": "第7单元",
    "keywords": "定投 平均成本 基金现金分红 红利再投资 定投分红与再投资分别改变什么",
    "version": "2026-11-18.u7.1",
    "storageKey": "investment-connected-fund-contributions-dividends-v1",
    "goal": "用份数和总价值追踪投入、分红与再投资，不把份额增加当作凭空获利。",
    "story": [
      "小明两次各投12元：第一次净值2元买6份，第二次净值6元买2份；共投24元、8份，平均成本24÷8＝3元，不能直接平均2和6得4元。定投改变买入节奏，低价买得多，但是否赚钱仍看总成本、期末价值和费用。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "假设之后净值3元，8份价值24元。基金每份分红1元，在无其他变化时净值由3降至2；现金分红8元，剩余份额价值16元，合计仍24元。若将8元按2元净值再投，新增4份、共12份，总值仍24元。",
          "各时点无费用、税或市场变化，现金可即时再投，现金留存不计息；这不是任何具体产品到账规则。"
        ]
      }
    ],
    "reviewText": "投入、分红和收益要分别记。份数增加并不证明赚钱，平均成本下降也不保证未来价格更高。",
    "recall": "回顾第6单元：同时核对份数与每份净值，才知道基金持仓价值。留在手里的分红现金也要算上。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "SEC 基金分配公告 2026年8月19日",
        "url": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/fund-distributions-investor-bulletin",
        "checked": "2026-11-18"
      },
      {
        "title": "SEC 费用公告 2025年7月23日",
        "url": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin",
        "checked": "2026-11-18"
      }
    ],
    "context": "小明两次各投12元：第一次净值2元买6份，第二次净值6元买2份；共投24元、8份，平均成本24÷8＝3元，不能直接平均2和6得4元。定投改变买入节奏，低价买得多，但是否赚钱仍看总成本、期末价值和费用。\n假设之后净值3元，8份价值24元。基金每份分红1元，在无其他变化时净值由3降至2；现金分红8元，剩余份额价值16元，合计仍24元。若将8元按2元净值再投，新增4份、共12份，总值仍24元。\n各时点无费用、税或市场变化，现金可即时再投，现金留存不计息；这不是任何具体产品到账规则。",
    "questions": [
      {
        "id": "practice-1",
        "title": "定投以后净值下跌",
        "story": [
          "两次各投12元，净值分别2元和6元，没有分红或费用。随后净值跌至2元。判断平均成本、持仓价值与盈亏。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "每份平均成本",
            "answer": "option-2",
            "explanation": "总投入24÷总份数8＝3元。",
            "options": [
              {
                "id": "option-1",
                "text": "4元",
                "feedback": "把两次价格直接平均，没有按实际份数加权。"
              },
              {
                "id": "option-2",
                "text": "3元"
              },
              {
                "id": "option-3",
                "text": "2元",
                "feedback": "只用了第一次或当前净值。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "持仓价值",
            "answer": "option-2",
            "explanation": "8份×2元＝16元。",
            "options": [
              {
                "id": "option-1",
                "text": "24元",
                "feedback": "把投入当当前价值。"
              },
              {
                "id": "option-2",
                "text": "16元"
              },
              {
                "id": "option-3",
                "text": "12元",
                "feedback": "只看一次投入。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "盈亏",
            "answer": "option-1",
            "explanation": "16−24＝−8元。",
            "options": [
              {
                "id": "option-1",
                "text": "−8元"
              },
              {
                "id": "option-2",
                "text": "0元",
                "feedback": "定投不保证回本。"
              },
              {
                "id": "option-3",
                "text": "＋8元",
                "feedback": "方向错误。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "定投为何仍可能亏？",
          "options": [
            {
              "id": "option-1",
              "text": "买入次数多就保证平均成本低于任何未来价格。",
              "feedback": "未来没有这种下限保证。"
            },
            {
              "id": "option-2",
              "text": "平均成本由投入与份数确定，未来净值仍可能低于它。"
            },
            {
              "id": "option-3",
              "text": "只要第二次贵，就必然全部亏光。",
              "feedback": "本题仍剩16元，不是零。"
            }
          ],
          "answer": "option-2",
          "explanation": "本题2元低于平均3元。"
        },
        "explanation": [
          "先算6＋2＝8份，再算24÷8与8×2。不能用两次价格的算术平均替代平均买入成本。"
        ]
      },
      {
        "id": "practice-2",
        "title": "留现金还是把分红投回去？",
        "story": [
          "独立从持8份、净值3元开始，每份分红1元，除分红外无变化，分红后净值2元。甲保留8元现金；乙用8元立即按2元再投。此后两者相同基金净值都跌到1.5元，甲的现金保留且不计息，无费用税。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "乙新增份数",
            "answer": "option-2",
            "explanation": "8÷2＝4份。",
            "options": [
              {
                "id": "option-1",
                "text": "8份",
                "feedback": "把现金金额当份数。"
              },
              {
                "id": "option-2",
                "text": "4份"
              },
              {
                "id": "option-3",
                "text": "2份",
                "feedback": "把分红后单位净值2元误当成新增2份。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "乙再投后总份数",
            "answer": "option-3",
            "explanation": "8＋4＝12份。",
            "options": [
              {
                "id": "option-1",
                "text": "8份",
                "feedback": "漏掉新增。"
              },
              {
                "id": "option-2",
                "text": "4份",
                "feedback": "只算新增。"
              },
              {
                "id": "option-3",
                "text": "12份"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "净值1.5元时甲总财富",
            "answer": "option-1",
            "explanation": "8×1.5＋现金8＝20元。",
            "options": [
              {
                "id": "option-1",
                "text": "20元"
              },
              {
                "id": "option-2",
                "text": "12元",
                "feedback": "漏掉保留现金。"
              },
              {
                "id": "option-3",
                "text": "24元",
                "feedback": "忽略之后下跌。"
              }
            ]
          },
          {
            "id": "result-4",
            "label": "净值1.5元时乙总财富",
            "answer": "option-2",
            "explanation": "12×1.5＝18元。",
            "options": [
              {
                "id": "option-1",
                "text": "24元",
                "feedback": "再投不保证不亏。"
              },
              {
                "id": "option-2",
                "text": "18元"
              },
              {
                "id": "option-3",
                "text": "20元",
                "feedback": "误用甲的现金留存方案。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "份数更多为何这次反而剩得更少？",
          "options": [
            {
              "id": "option-1",
              "text": "再投资自动损失分红。",
              "feedback": "再投时两者总值都24元。"
            },
            {
              "id": "option-2",
              "text": "分红本身创造了额外财富。",
              "feedback": "分红前后总值在本题中不变。"
            },
            {
              "id": "option-3",
              "text": "再投增加了对基金后续涨跌的暴露，现金留存与再投的后续结果可不同。"
            }
          ],
          "answer": "option-3",
          "explanation": "以后涨跌才使两条路径分开。"
        },
        "explanation": [
          "分红与再投当下都不凭空创造财富，之后价格下跌时乙暴露12份、甲8份。若未来上涨，排序也可能相反；本题不推荐哪种方案。"
        ]
      }
    ]
  },
  {
    "id": "fund-benchmarks-and-fees",
    "number": 8,
    "title": "基金、基准与费用",
    "heading": "跑赢基准，就一定赚钱了吗？",
    "meta": "第8单元",
    "keywords": "股票指数 指数基金 主动基金 业绩比较基准 百分点 基金管理费 基金收益怎样与基准和费用一起比较",
    "version": "2026-11-18.u8.1",
    "storageKey": "investment-connected-fund-benchmarks-and-fees-v1",
    "goal": "区分绝对赚钱、相对基准表现和扣费后结果，不把一次领先当作持续能力。",
    "story": [
      "教学指数把A、B、C三店各一股的价格相加，10＋10＋10＝30，后来12＋12＋9＝33，整体涨10%，其中C仍下跌。这个加法篮子只是教学指数，不冒充实际指数编制方法。指数基金按规则跟踪，主动基金按约定范围主动选择；二者都可能亏。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "同一期间、同一基准和相同风险暴露的简化比较：各投100元，指数篮子毛价值110元、明确扣1元费用后109元；主动方案毛价值112元、扣4元费用后108元。主动毛收益更高，但净收益8%低于指数方案9%。",
          "真实已公布净回报若已扣内部费用，不再重复扣一次管理费。费率和计提按产品文件，本例是一次性给定金额。"
        ]
      }
    ],
    "reviewText": "先问比什么、比哪段时间、是否同风险口径、费用是否已扣，再看名次和超额。",
    "recall": "回顾第2、4单元：核对费用是否已扣，并看基金与比较对象承受的风险是否相近。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "SEC 费用公告 2025年7月23日",
        "url": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin",
        "checked": "2026-11-18"
      },
      {
        "title": "Investor.gov 指数基金教育页",
        "url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-4",
        "checked": "2026-11-18"
      }
    ],
    "context": "教学指数把A、B、C三店各一股的价格相加，10＋10＋10＝30，后来12＋12＋9＝33，整体涨10%，其中C仍下跌。这个加法篮子只是教学指数，不冒充实际指数编制方法。指数基金按规则跟踪，主动基金按约定范围主动选择；二者都可能亏。\n同一期间、同一基准和相同风险暴露的简化比较：各投100元，指数篮子毛价值110元、明确扣1元费用后109元；主动方案毛价值112元、扣4元费用后108元。主动毛收益更高，但净收益8%低于指数方案9%。\n真实已公布净回报若已扣内部费用，不再重复扣一次管理费。费率和计提按产品文件，本例是一次性给定金额。",
    "questions": [
      {
        "id": "practice-1",
        "title": "一只赚钱却落后，一只亏钱却领先",
        "story": [
          "以下公布收益率已扣基金内部费用，不再另扣。甲基金＋6%，它的基准＋10%；乙基金−2%，它的基准−5%。各比较同一期间、相应可比口径。判断两者相对基准差及乙的绝对盈亏。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "甲减基准",
            "answer": "option-2",
            "explanation": "6%−10%＝−4个百分点。",
            "options": [
              {
                "id": "option-1",
                "text": "＋4个百分点",
                "feedback": "差的方向反了。"
              },
              {
                "id": "option-2",
                "text": "−4个百分点"
              },
              {
                "id": "option-3",
                "text": "−40个百分点",
                "feedback": "混淆相对百分比与百分点。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "乙减基准",
            "answer": "option-3",
            "explanation": "−2%−(−5%)＝＋3个百分点。",
            "options": [
              {
                "id": "option-1",
                "text": "−3个百分点",
                "feedback": "−2比−5更高。"
              },
              {
                "id": "option-2",
                "text": "0个百分点",
                "feedback": "两者不相同。"
              },
              {
                "id": "option-3",
                "text": "＋3个百分点"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "乙绝对结果",
            "answer": "option-1",
            "explanation": "基金自身收益为−2%。",
            "options": [
              {
                "id": "option-1",
                "text": "亏损2%"
              },
              {
                "id": "option-2",
                "text": "盈利3%",
                "feedback": "把相对超额当绝对收益。"
              },
              {
                "id": "option-3",
                "text": "盈利5%",
                "feedback": "把基准跌幅当收益。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "跑赢与赚钱是什么关系？",
          "options": [
            {
              "id": "option-1",
              "text": "跑赢基准就必定赚钱。",
              "feedback": "乙是反例。"
            },
            {
              "id": "option-2",
              "text": "赚钱就必定跑赢基准。",
              "feedback": "甲是反例。"
            },
            {
              "id": "option-3",
              "text": "二者不同，甲赚钱但落后，乙亏钱但领先各自基准。"
            }
          ],
          "answer": "option-3",
          "explanation": "还不能把不同基准的两个超额直接当统一风险排名。"
        },
        "explanation": [
          "百分点直接相减。甲与乙基准不同，本题分别比较，不据此认定哪个基金经理更强。"
        ]
      },
      {
        "id": "practice-2",
        "title": "扣费前后，谁排在前面？",
        "story": [
          "回到同基准简化比较：各投100元，指数方案扣费前110元、一次给定费用1元；主动方案扣费前112元、一次给定费用4元。没有其他收支。判断两者净收益率与能否由本期保证未来赢家。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "主动净收益率",
            "answer": "option-2",
            "explanation": "(112−4−100)÷100＝8%。",
            "options": [
              {
                "id": "option-1",
                "text": "12%",
                "feedback": "未扣费。"
              },
              {
                "id": "option-2",
                "text": "8%"
              },
              {
                "id": "option-3",
                "text": "4%",
                "feedback": "把费用当收益。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "指数净收益率",
            "answer": "option-1",
            "explanation": "(110−1−100)÷100＝9%。",
            "options": [
              {
                "id": "option-1",
                "text": "9%"
              },
              {
                "id": "option-2",
                "text": "10%",
                "feedback": "未扣费。"
              },
              {
                "id": "option-3",
                "text": "1%",
                "feedback": "把费用当收益。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "下期一定最好者",
            "answer": "option-3",
            "explanation": "需要新证据，不能把一次结果变成承诺。",
            "options": [
              {
                "id": "option-1",
                "text": "主动",
                "feedback": "毛收益领先不保证未来。"
              },
              {
                "id": "option-2",
                "text": "指数",
                "feedback": "本期净领先不保证未来。"
              },
              {
                "id": "option-3",
                "text": "无法由本期保证"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "这组比较说明什么？",
          "options": [
            {
              "id": "option-1",
              "text": "只看扣费前排名就够了。",
              "feedback": "本题扣费后名次不同。"
            },
            {
              "id": "option-2",
              "text": "比较需对齐期间、基准与费用口径；管理方式名称不保证结果。"
            },
            {
              "id": "option-3",
              "text": "费用高意味着必须取得更高净收益。",
              "feedback": "高费用不是回报承诺。"
            }
          ],
          "answer": "option-2",
          "explanation": "本例只验证给定口径下的结果。"
        },
        "explanation": [
          "先扣明确给定的一次费用，再比同样100元投入的净收益。若数字原本已是扣费后的净值表现，则不可重复扣费。"
        ]
      }
    ]
  },
  {
    "id": "bond-price-and-credit",
    "number": 9,
    "title": "债券价格、违约与债券基金",
    "heading": "债券约好还款，为什么现在还会跌？",
    "meta": "第9单元",
    "keywords": "债券为什么会跌价 违约 债券基金也会亏 固定还款约定与债券价格信用风险",
    "version": "2026-11-18.u9.1",
    "storageKey": "investment-connected-bond-price-and-credit-v1",
    "goal": "区分交易价格、到期约定和实际偿付，理解债券基金净值也会变化。",
    "story": [
      "小店债券买入价100元，约定一年后一次付本息105元。市场中其他期限与信用等条件相近的债券提供更高回报时，这张固定还款债券通常需要降价才有吸引力。题目另给当前可成交价95元，不声称95元仅由利率精确算出。",
      "期限、信用、流动性等其他差异若存在需另查。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "提前卖95元会亏5元；若不提前卖且题设实际按约付105元，到期赚5元。两条退出路径不能把95和105都收一次。到期金额是约定而非无风险保证；若实际只能回收60元，就要按实际回款算损失。",
          "债券组市价下跌或发生信用损失，都可能使基金净值下降，费用也会影响净资产。"
        ]
      }
    ],
    "reviewText": "价格风险与违约风险分开看，到期约定与实际到账分开看。债券基金不是自动保本账户。",
    "recall": "回顾第1、6单元：先追踪债券实际偿付与价格，再看它们怎样改变基金净资产和每份净值。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "澳大利亚储备银行 债券与收益率曲线教育页 无标注更新日",
        "url": "https://www.rba.gov.au/education/resources/explainers/bonds-and-the-yield-curve.html",
        "checked": "2026-11-18"
      },
      {
        "title": "Investor.gov 公司债教育页",
        "url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products",
        "checked": "2026-11-18"
      },
      {
        "title": "SEC 费用公告 2025年7月23日",
        "url": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin",
        "checked": "2026-11-18"
      }
    ],
    "context": "小店债券买入价100元，约定一年后一次付本息105元。市场中其他期限与信用等条件相近的债券提供更高回报时，这张固定还款债券通常需要降价才有吸引力。题目另给当前可成交价95元，不声称95元仅由利率精确算出。期限、信用、流动性等其他差异若存在需另查。\n提前卖95元会亏5元；若不提前卖且题设实际按约付105元，到期赚5元。两条退出路径不能把95和105都收一次。到期金额是约定而非无风险保证；若实际只能回收60元，就要按实际回款算损失。\n债券组市价下跌或发生信用损失，都可能使基金净值下降，费用也会影响净资产。",
    "questions": [
      {
        "id": "practice-1",
        "title": "提前卖出与持有到期",
        "story": [
          "债券初始100元，当前可成交95元，约定到期105元。甲现在全部卖出；乙不卖，并且本题明确给定乙到期实际足额收到105元。均无费用。另有按当期市价计价、持有相同价格变化债券组的基金。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "甲最终盈亏",
            "answer": "option-1",
            "explanation": "95−100＝−5元。",
            "options": [
              {
                "id": "option-1",
                "text": "−5元"
              },
              {
                "id": "option-2",
                "text": "＋5元",
                "feedback": "用了甲没有收到的到期款。"
              },
              {
                "id": "option-3",
                "text": "＋100元",
                "feedback": "本金不是收益。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "乙按本题实际履约的盈亏",
            "answer": "option-3",
            "explanation": "105−100＝5元。",
            "options": [
              {
                "id": "option-1",
                "text": "−5元",
                "feedback": "把中途市价当最终收款。"
              },
              {
                "id": "option-2",
                "text": "＋105元",
                "feedback": "未减初始投入。"
              },
              {
                "id": "option-3",
                "text": "＋5元"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "当期债券价格下跌能否影响基金净值",
            "answer": "option-2",
            "explanation": "本题明确按市价。",
            "options": [
              {
                "id": "option-1",
                "text": "不能",
                "feedback": "基金资产也按其适用口径计价。"
              },
              {
                "id": "option-2",
                "text": "能"
              },
              {
                "id": "option-3",
                "text": "基金必须保持原净值",
                "feedback": "名称不保证净值。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "债券约定还款与基金当期净值为什么可以不同？",
          "options": [
            {
              "id": "option-1",
              "text": "约定锁定所有时点交易价格。",
              "feedback": "中途价格仍可变。"
            },
            {
              "id": "option-2",
              "text": "约定到期金额、市场交易价格与实际能否履约是不同问题。"
            },
            {
              "id": "option-3",
              "text": "拿到95元还能再收105元。",
              "feedback": "甲已经卖出，不再持有该权利。"
            }
          ],
          "answer": "option-2",
          "explanation": "不能把约定当实际保证。"
        },
        "explanation": [
          "乙的最终收益依赖题给实际履约条件，并不表示持有到期普遍无风险；甲与乙不能在同一计算中重复取两条回款。"
        ]
      },
      {
        "id": "practice-2",
        "title": "违约怎样影响每份基金？",
        "story": [
          "教学债券基金初始净资产100元、10份，底层合并视为一个债券组。后来该组全部结清，实际合计回收60元，之后无其他回款；明确给定本期费用2元从回收现金中扣除，无申赎。小明一直持5份、最初花50元。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "基金期末净资产",
            "answer": "option-2",
            "explanation": "60−2＝58元。",
            "options": [
              {
                "id": "option-1",
                "text": "60元",
                "feedback": "未扣费用。"
              },
              {
                "id": "option-2",
                "text": "58元"
              },
              {
                "id": "option-3",
                "text": "98元",
                "feedback": "漏掉信用损失40元。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "期末单位净值",
            "answer": "option-3",
            "explanation": "58÷10＝5.8元。",
            "options": [
              {
                "id": "option-1",
                "text": "10元",
                "feedback": "把初始净值当保证。"
              },
              {
                "id": "option-2",
                "text": "6元",
                "feedback": "未扣费用。"
              },
              {
                "id": "option-3",
                "text": "5.8元"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "小明总损失",
            "answer": "option-1",
            "explanation": "50−5×5.8＝21元。",
            "options": [
              {
                "id": "option-1",
                "text": "21元"
              },
              {
                "id": "option-2",
                "text": "42元",
                "feedback": "把全基金损失当自己的。"
              },
              {
                "id": "option-3",
                "text": "20元",
                "feedback": "只算分摊的底层损失20元，漏掉5份对应的1元费用。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "份数不变，为什么仍会亏？",
          "options": [
            {
              "id": "option-1",
              "text": "基金只持债券就保证每份10元。",
              "feedback": "没有该保证。"
            },
            {
              "id": "option-2",
              "text": "底层实际回款与费用改变净资产，份数不变时每份价值随之变化。"
            },
            {
              "id": "option-3",
              "text": "费用只由经理个人承担。",
              "feedback": "题干明确费用从基金资产中扣。"
            }
          ],
          "answer": "option-2",
          "explanation": "本题5份只剩29元。"
        },
        "explanation": [
          "先用实际收回60元，不用承诺金额代替；扣2元得58元，再除10份、乘个人5份。一次费用是教学给定金额，不代表真实年度费率计提规则。"
        ]
      }
    ]
  },
  {
    "id": "cash-sources-and-free-cash-flow",
    "number": 13,
    "title": "现金来源与自由现金流",
    "heading": "现金多了，是生意赚的，还是借来、卖设备换来的？",
    "meta": "第13单元",
    "keywords": "经营活动现金流 投资活动现金流 筹资活动现金流 自由现金流 一次性收益 现金来源与自由现金流",
    "version": "2026-11-18.u13.1",
    "storageKey": "investment-connected-cash-sources-and-free-cash-flow-v1",
    "goal": "先找现金从哪里来，再分别看利润和自由现金流。",
    "story": [
      "接第12单元的原故事，进入第3个月。月初现金85元、存货4盒（成本8元）、旧冰柜账面230元，还欠供应商12元，没有银行借款。",
      "本月另进20盒冰淇淋，每盒2元，付清40元。卖出20盒，每盒5元，收齐100元。支付工资10元，借入银行本金100元。本月末计提旧冰柜折旧10元，之后卖掉旧冰柜，收齐250元。再付120元买新冰柜，月底达到可使用状态，下月起折旧。",
      "主线暂未支付供应商12元。"
    ],
    "worked": [
      {
        "title": "把现金按来源分开",
        "paragraphs": [
          "经营活动记录做生意的收付款。收货款100元，付进货40元和工资10元，经营净现金流为50元。",
          "投资活动在本例记录买卖长期设备。卖旧冰柜收250元，买新冰柜付120元，净流入130元。",
          "筹资活动记录这次银行借款，净流入100元。借来的本金增加现金，也增加还款义务。",
          "本月现金增加50＋130＋100＝280元。月初85元加280元，月末有365元。"
        ]
      },
      {
        "title": "卖冰柜收了多少钱，实际赚了多少？",
        "paragraphs": [
          "旧柜出售前账面价值为230−10＝220元。卖出收250元，同时设备出账220元，处置收益为30元。250元进现金流量表，30元进入利润。",
          "本月日常生意利润为100−40−10−10＝40元，再加30元处置收益，总利润70元。这台冰柜只能卖一次。看以后能赚多少，还需要根据经营情况判断。"
        ]
      },
      {
        "title": "为什么自由现金流反而是负数？",
        "paragraphs": [
          "本单元自由现金流＝经营活动净现金流−购置设备的现金支出＝50−120＝−70元。当月经营留下的现金比购置支出少70元。",
          "这个口径用购置设备的支出总额，卖旧柜收到的250元和借款100元都在公式之外。加回这两笔，就能核对现金总变化：−70＋250＋100＝280元。",
          "处置收益30元本就没有进入这个口径，不能从−70元再扣一次。若偶发的一笔收付款本身属于经营活动，仍可能计入自由现金流。看真实公司时，应先查它采用的算法，并考虑偿债等资金用途。"
        ]
      }
    ],
    "reviewText": "现金增加时，拆开看经营、投资和筹资的来源。利润增加时，分清哪些来自平常生意、哪些来自偶发交易。比较自由现金流时先读计算说明。",
    "recall": "回顾第12单元：借款入账时，现金和负债同时增加。用三类现金流之和加上月初现金，可以检验月末余额。",
    "conditions": "案例金额为教学假设。本例设备处置偶发。银行借款本月未还本，利息、税费、处置费用及其余未列事项均设为0。存货每盒成本相同，月末仍有4盒。两道练习独立，只修改题干指定的条件。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "财政部《企业会计准则第31号——现金流量表》2006年版，第八至十五条",
        "url": "https://kjs.mof.gov.cn/zt/kjzzss/kuaijizhunzeshishi/200806/t20080618_46250.htm",
        "checked": "2026-11-18"
      },
      {
        "title": "财政部《企业会计准则第4号——固定资产》2006年版，第二十三条",
        "url": "https://kjs.mof.gov.cn/zt/kjzzss/kuaijizhunzeshishi/200806/t20080618_46213.htm",
        "checked": "2026-11-18"
      },
      {
        "title": "SEC 自由现金流口径说明 102.07，条目日期2016年5月17日，页面更新2022年12月13日",
        "url": "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures",
        "checked": "2026-11-18"
      }
    ],
    "context": "接第12单元的原故事，进入第3个月。月初现金85元、存货4盒（成本8元）、旧冰柜账面230元，还欠供应商12元，没有银行借款。\n本月另进20盒冰淇淋，每盒2元，付清40元。卖出20盒，每盒5元，收齐100元。支付工资10元，借入银行本金100元。本月末计提旧冰柜折旧10元，之后卖掉旧冰柜，收齐250元。再付120元买新冰柜，月底达到可使用状态，下月起折旧。主线暂未支付供应商12元。\n经营活动记录做生意的收付款。收货款100元，付进货40元和工资10元，经营净现金流为50元。\n投资活动在本例记录买卖长期设备。卖旧冰柜收250元，买新冰柜付120元，净流入130元。\n筹资活动记录这次银行借款，净流入100元。借来的本金增加现金，也增加还款义务。\n本月现金增加50＋130＋100＝280元。月初85元加280元，月末有365元。\n旧柜出售前账面价值为230−10＝220元。卖出收250元，同时设备出账220元，处置收益为30元。250元进现金流量表，30元进入利润。\n本月日常生意利润为100−40−10−10＝40元，再加30元处置收益，总利润70元。这台冰柜只能卖一次。看以后能赚多少，还需要根据经营情况判断。\n本单元自由现金流＝经营活动净现金流−购置设备的现金支出＝50−120＝−70元。当月经营留下的现金比购置支出少70元。\n这个口径用购置设备的支出总额，卖旧柜收到的250元和借款100元都在公式之外。加回这两笔，就能核对现金总变化：−70＋250＋100＝280元。\n处置收益30元本就没有进入这个口径，不能从−70元再扣一次。若偶发的一笔收付款本身属于经营活动，仍可能计入自由现金流。看真实公司时，应先查它采用的算法，并考虑偿债等资金用途。",
    "questions": [
      {
        "id": "practice-1",
        "title": "偿还供应商旧欠款，放进哪一类？",
        "story": [
          "沿用第3个月的交易。收顾客货款100元，付当月进货款40元和工资10元，卖旧冰柜收250元，买新冰柜付120元，借到银行本金100元。",
          "现在又付清以前欠供应商的进货款12元，没有利息或其他费用。月初现金仍为85元。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "经营活动净现金流",
            "answer": "option-1",
            "explanation": "100−40−10−12＝净流入38元。",
            "options": [
              {
                "id": "option-1",
                "text": "＋38元"
              },
              {
                "id": "option-2",
                "text": "＋50元",
                "feedback": "少扣了本月实际支付的旧进货款12元。"
              },
              {
                "id": "option-3",
                "text": "＋70元",
                "feedback": "70元是总利润，经营现金流按本期实际收付计算。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "投资活动净现金流",
            "answer": "option-2",
            "explanation": "250−120＝净流入130元。",
            "options": [
              {
                "id": "option-1",
                "text": "−90元",
                "feedback": "应使用卖设备实际收款250元，不能用处置收益30元代替。"
              },
              {
                "id": "option-2",
                "text": "＋130元"
              },
              {
                "id": "option-3",
                "text": "＋250元",
                "feedback": "还要扣购买新冰柜付出的120元。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "筹资活动净现金流",
            "answer": "option-3",
            "explanation": "借入本金100元，本月未还银行本金。",
            "options": [
              {
                "id": "option-1",
                "text": "＋88元",
                "feedback": "供应商旧货款属于经营付款，本月没有归还银行借款。"
              },
              {
                "id": "option-2",
                "text": "＋350元",
                "feedback": "卖设备所得250元应归投资活动。"
              },
              {
                "id": "option-3",
                "text": "＋100元"
              }
            ]
          },
          {
            "id": "result-4",
            "label": "本月现金合计变化",
            "answer": "option-2",
            "explanation": "38＋130＋100＝增加268元。",
            "options": [
              {
                "id": "option-1",
                "text": "＋280元",
                "feedback": "漏掉支付供应商的12元。"
              },
              {
                "id": "option-2",
                "text": "＋268元"
              },
              {
                "id": "option-3",
                "text": "＋353元",
                "feedback": "353元是月末现金余额，包含月初85元。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "偿还供应商这12元，为什么这样处理？",
          "options": [
            {
              "id": "option-1",
              "text": "以前的欠款都属于筹资，所以还供应商的钱减少筹资现金流。",
              "feedback": "要看欠款来自什么。题目里的供应商欠款来自日常进货。"
            },
            {
              "id": "option-2",
              "text": "旧欠款不是本期新费用，所以还款也不影响任何现金流。",
              "feedback": "本期确实付了12元，现金会减少。"
            },
            {
              "id": "option-3",
              "text": "这是日常进货货款的支付，归经营现金流，还旧款不重复扣利润。"
            }
          ],
          "answer": "option-3",
          "explanation": "按还款所对应的交易性质分类。"
        },
        "explanation": [
          "经营、投资与筹资净流入分别为38元、130元和100元，总现金增加268元，月末现金353元。偿还旧欠款不重复确认费用，总利润仍是70元。自由现金流为38−120＝−82元。付款时间改变了现金流，利润仍保持原数。"
        ]
      },
      {
        "id": "practice-2",
        "title": "卖设备收到钱，却没有处置收益",
        "story": [
          "回到第3个月主线，本题不承接练习一支付供应商旧欠款的安排。经营收款100元，付进货40元、工资10元，借款100元，购置新冰柜付120元。旧冰柜已计提本月折旧10元，出售前账面价值220元。",
          "现在买家只支付220元，价款全部收到。按经营净现金流减购置设备的现金支出来计算自由现金流。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "本次设备处置收益",
            "answer": "option-2",
            "explanation": "220−220＝0元。",
            "options": [
              {
                "id": "option-1",
                "text": "220元",
                "feedback": "220元是出售收款，还要扣账面价值。"
              },
              {
                "id": "option-2",
                "text": "0元"
              },
              {
                "id": "option-3",
                "text": "30元",
                "feedback": "沿用了原故事250元的卖价。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "本月总利润",
            "answer": "option-1",
            "explanation": "100−40−10−10＋0＝40元。",
            "options": [
              {
                "id": "option-1",
                "text": "40元"
              },
              {
                "id": "option-2",
                "text": "70元",
                "feedback": "原故事的30元处置收益在本题为0。"
              },
              {
                "id": "option-3",
                "text": "260元",
                "feedback": "这里把220元收款全部计入利润，遗漏设备出账。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "本单元口径的自由现金流",
            "answer": "option-2",
            "explanation": "100−40−10−120＝−70元。",
            "options": [
              {
                "id": "option-1",
                "text": "＋150元",
                "feedback": "50＋220−120把卖设备收款纳入了公式，本题只用经营净现金流减购置支出。"
              },
              {
                "id": "option-2",
                "text": "−70元"
              },
              {
                "id": "option-3",
                "text": "＋250元",
                "feedback": "250元是现金总增量，含设备出售和借款。"
              }
            ]
          },
          {
            "id": "result-4",
            "label": "本月现金合计变化",
            "answer": "option-1",
            "explanation": "50＋(220−120)＋100＝增加250元。",
            "options": [
              {
                "id": "option-1",
                "text": "＋250元"
              },
              {
                "id": "option-2",
                "text": "＋280元",
                "feedback": "280元仍使用原来250元的出售价格。"
              },
              {
                "id": "option-3",
                "text": "＋335元",
                "feedback": "335元是月末余额，含月初85元。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "这次出售说明了什么？",
          "options": [
            {
              "id": "option-1",
              "text": "收到的220元都算一次性收益，并提高本口径自由现金流。",
              "feedback": "实收与账面价相同，处置收益为零，收款属于投资活动。"
            },
            {
              "id": "option-2",
              "text": "卖设备有现金流但没处置收益，也不提高本口径自由现金流。"
            },
            {
              "id": "option-3",
              "text": "没有处置收益，卖设备的220元也不应列入现金流量表。",
              "feedback": "即使没有处置收益，实际收款仍应计入投资活动现金流。"
            }
          ],
          "answer": "option-2",
          "explanation": "现金流量表记录实际卖设备收到的220元。"
        },
        "explanation": [
          "卖价等于账面价值，所以处置收益为0，总利润40元。三类现金流依次为50元、100元、100元，共增加250元，月末335元。比原故事少收30元，处置收益也少30元。经营净现金流与购置支出均未变，自由现金流仍为−70元。"
        ]
      }
    ]
  },
  {
    "id": "sales-cost-and-profit",
    "number": 14,
    "title": "销量、成本与利润",
    "heading": "为什么多卖一盒，利润就可能翻倍？",
    "meta": "第14单元",
    "keywords": "毛利 毛利率 净利润率 固定成本 变动成本 保本点 经营杠杆 销量变化怎样穿过成本影响利润",
    "version": "2026-11-18.u14.1",
    "storageKey": "investment-connected-sales-cost-and-profit-v1",
    "goal": "分清每件商品的成本与固定总成本，解释销量变化为何放大利润变化。",
    "story": [
      "小店进入后续经营计划阶段。以下是独立的月度试算，不把第13单元某一个月直接当成未来常态。老板自己经营，本例不计工资、税费和利息。每盒卖4元，商品成本2元；每月固定成本6元，其中新冰柜折旧5元、其他固定费用1元。",
      "在题给销量范围内价格、单位成本和固定总额不变，购销数量相同、无存货变化。"
    ],
    "worked": [
      {
        "title": "看店主怎么算",
        "paragraphs": [
          "卖4盒：收入16元，商品成本8元，毛利8元，毛利率50%；再扣固定费用6元，净利润2元，净利润率12.5%。每多卖1盒，先多留下4−2＝2元承担固定成本；卖3盒正好覆盖6元，利润0元。",
          "卖5盒利润4元：销量增加25%，利润增加100%。原因是同一笔固定成本没有随着销量增加；利润增长率使用原利润2元作分母。若原利润为0或负数，不沿用这个百分比比较。"
        ]
      }
    ],
    "reviewText": "下一次遇到利润大涨，先问销量、售价、单位成本和固定成本各变了什么。不能仅凭利润增长百分比推断生意质量。",
    "recall": "回顾第10至13单元：本题算的是当月利润。折旧属于当期费用，购买设备付款的时间另看现金流。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "OpenStax 管理会计第3.2节 现行在线章节",
        "url": "https://openstax.org/books/principles-managerial-accounting/pages/3-2-calculate-a-break-even-point-in-units-and-dollars",
        "checked": "2026-11-18"
      }
    ],
    "context": "小店进入后续经营计划阶段。以下是独立的月度试算，不把第13单元某一个月直接当成未来常态。老板自己经营，本例不计工资、税费和利息。每盒卖4元，商品成本2元；每月固定成本6元，其中新冰柜折旧5元、其他固定费用1元。在题给销量范围内价格、单位成本和固定总额不变，购销数量相同、无存货变化。\n卖4盒：收入16元，商品成本8元，毛利8元，毛利率50%；再扣固定费用6元，净利润2元，净利润率12.5%。每多卖1盒，先多留下4−2＝2元承担固定成本；卖3盒正好覆盖6元，利润0元。\n卖5盒利润4元：销量增加25%，利润增加100%。原因是同一笔固定成本没有随着销量增加；利润增长率使用原利润2元作分母。若原利润为0或负数，不沿用这个百分比比较。",
    "questions": [
      {
        "id": "practice-1",
        "title": "降价后还要卖多少才保本？",
        "story": [
          "仍卖4盒、单位商品成本2元、固定成本6元。现在只把每盒售价从4元降到3元。分别判断当月利润、商品成本总额和新保本销量。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "当月利润",
            "answer": "option-1",
            "explanation": "12−8−6＝−2元。",
            "options": [
              {
                "id": "option-1",
                "text": "−2元"
              },
              {
                "id": "option-2",
                "text": "2元",
                "feedback": "沿用了原来4元售价的利润。"
              },
              {
                "id": "option-3",
                "text": "4元",
                "feedback": "只算了毛利，漏掉固定成本6元。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "商品成本总额",
            "answer": "option-3",
            "explanation": "4×2＝8元。",
            "options": [
              {
                "id": "option-1",
                "text": "2元",
                "feedback": "这是每盒成本，没有乘4盒。"
              },
              {
                "id": "option-2",
                "text": "6元",
                "feedback": "这是固定成本，不是商品成本。"
              },
              {
                "id": "option-3",
                "text": "8元"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "保本销量",
            "answer": "option-2",
            "explanation": "每盒只剩1元承担固定成本，6÷1＝6盒。",
            "options": [
              {
                "id": "option-1",
                "text": "3盒",
                "feedback": "沿用原售价下的保本量。"
              },
              {
                "id": "option-2",
                "text": "6盒"
              },
              {
                "id": "option-3",
                "text": "2盒",
                "feedback": "把固定成本6元直接除售价3元，漏掉每盒商品成本2元。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "哪句话解释了降价后的变化？",
          "options": [
            {
              "id": "option-1",
              "text": "售价降低会自动降低店租和折旧。",
              "feedback": "固定成本条件并未改变。"
            },
            {
              "id": "option-2",
              "text": "商品成本率一定保持原来50%。",
              "feedback": "售价变了，成本率也可能变。"
            },
            {
              "id": "option-3",
              "text": "单位售价与单位成本的差缩小，固定成本不变，需要卖更多才能保本。"
            }
          ],
          "answer": "option-3",
          "explanation": "要把收入、单位成本和固定成本一起看。"
        },
        "explanation": [
          "收入4×3＝12元，毛利12−8＝4元，扣固定成本6元后亏2元。新保本量6÷(3−2)＝6盒。这题改变的是每卖一盒可覆盖固定成本的金额，而非只换一个销量数字。"
        ]
      },
      {
        "id": "practice-2",
        "title": "利润都多2元，为什么涨幅不同？",
        "story": [
          "回到售价4元、单位成本2元。甲是本店，固定成本6元；乙是对照模型，固定成本0元，其他相同。两者销量都由4盒增加到5盒。分别判断甲的新利润、乙的新利润，以及两者利润增长率。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "甲卖5盒的利润",
            "answer": "option-1",
            "explanation": "20−10−6＝4元。",
            "options": [
              {
                "id": "option-1",
                "text": "4元"
              },
              {
                "id": "option-2",
                "text": "10元",
                "feedback": "只算毛利。"
              },
              {
                "id": "option-3",
                "text": "2元",
                "feedback": "没有更新销量。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "乙卖5盒的利润",
            "answer": "option-2",
            "explanation": "20−10＝10元。",
            "options": [
              {
                "id": "option-1",
                "text": "4元",
                "feedback": "误用了甲的固定成本。"
              },
              {
                "id": "option-2",
                "text": "10元"
              },
              {
                "id": "option-3",
                "text": "20元",
                "feedback": "把收入当利润。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "甲与乙的利润增长率",
            "answer": "option-2",
            "explanation": "甲(4−2)÷2＝100%，乙(10−8)÷8＝25%。",
            "options": [
              {
                "id": "option-1",
                "text": "都是25%",
                "feedback": "甲利润由2变4，增加100%。"
              },
              {
                "id": "option-2",
                "text": "甲100% 乙25%"
              },
              {
                "id": "option-3",
                "text": "都是100%",
                "feedback": "乙原利润8元，不是2元。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "为什么两者利润增长率不同？",
          "options": [
            {
              "id": "option-1",
              "text": "甲的固定成本使原来的利润基数较小，同样多赚2元形成更大百分比。"
            },
            {
              "id": "option-2",
              "text": "固定成本让甲多卖一盒多赚的钱一定更多。",
              "feedback": "本例每多卖一盒都多赚2元。"
            },
            {
              "id": "option-3",
              "text": "固定成本越大，投资就一定越好。",
              "feedback": "固定成本也会放大销量下滑的影响。"
            }
          ],
          "answer": "option-1",
          "explanation": "本例两者利润都增加2元，但基数不同。"
        },
        "explanation": [
          "甲原利润2元、新利润4元；乙原利润8元、新利润10元。两者绝对增量相同。经营杠杆解释敏感性，不是优劣排名。乙的零固定成本是用于比较的模型，不能据此删掉本店真实折旧。"
        ]
      }
    ]
  },
  {
    "id": "return-on-equity-and-leverage",
    "number": 15,
    "title": "净资产收益率与负债",
    "heading": "利润更多，盈利效率也一定更高吗？",
    "meta": "第15单元",
    "keywords": "净资产收益率 资产负债率 借钱投资的杠杆 盈利效率与借钱承担的风险",
    "version": "2026-11-18.u15.1",
    "storageKey": "investment-connected-return-on-equity-and-leverage-v1",
    "goal": "用正确分母比较盈利效率，区分公司ROE与个人借钱投资的本金收益率。",
    "story": [
      "小店做大后，小明看年度资料，而不是把上月利润乘12。以下年度数据均为合成的已知输入：全年利润20元、全年平均净资产100元；年末资产150元、负债50元。平均数是题给数据，不用年末余额替换，也不声称能从这几项重建完整年度账本。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "ROE＝20÷100＝20%，描述这份平均账面净资产对应的年度利润；年末资产负债率＝50÷150＝33⅓%。两者的分母、时点不同，不能互换。ROE高还要看利润来源和债务，不能独自证明好投资。",
          "再看借钱的作用：自己10元、借10元买20元投资，若资产涨到22元，归还10元本金后剩12元，自己的10元赚20%；若跌到18元，还10元后只剩8元，自己的钱亏20%。这里利息费用设0；这叫个人本金收益率，不冒称公司年度ROE。"
        ]
      }
    ],
    "reviewText": "先看比率用了什么分母，再问高回报是否伴随更多借款。本题不把负债率、ROE和个人杠杆收益混成同一个指标。",
    "recall": "回顾第12、14单元：净资产是资产扣负债后的账面家底，同样金额的利润差放在不同基数上，比例会不同。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Schwab 财务比率教育文章 2025年8月19日",
        "url": "https://www.schwab.com/learn/story/five-key-financial-ratios-stock-analysis",
        "checked": "2026-11-18"
      },
      {
        "title": "FINRA 财务报表教育文章 2025年7月8日",
        "url": "https://syndication.finra.org/content/using-financial-statements-evaluate-investment-opportunities",
        "checked": "2026-11-18"
      }
    ],
    "context": "小店做大后，小明看年度资料，而不是把上月利润乘12。以下年度数据均为合成的已知输入：全年利润20元、全年平均净资产100元；年末资产150元、负债50元。平均数是题给数据，不用年末余额替换，也不声称能从这几项重建完整年度账本。\nROE＝20÷100＝20%，描述这份平均账面净资产对应的年度利润；年末资产负债率＝50÷150＝33⅓%。两者的分母、时点不同，不能互换。ROE高还要看利润来源和债务，不能独自证明好投资。\n再看借钱的作用：自己10元、借10元买20元投资，若资产涨到22元，归还10元本金后剩12元，自己的10元赚20%；若跌到18元，还10元后只剩8元，自己的钱亏20%。这里利息费用设0；这叫个人本金收益率，不冒称公司年度ROE。",
    "questions": [
      {
        "id": "practice-1",
        "title": "两家店，谁的ROE更高？",
        "story": [
          "两家冰淇淋店的年度数据：甲利润20元、全年平均净资产100元；乙利润30元、全年平均净资产300元。只比较ROE，不假设其他条件相同。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "甲ROE",
            "answer": "option-1",
            "explanation": "20÷100。",
            "options": [
              {
                "id": "option-1",
                "text": "20%"
              },
              {
                "id": "option-2",
                "text": "5%",
                "feedback": "把100÷20得到的倒数倍数误写成ROE百分比。"
              },
              {
                "id": "option-3",
                "text": "100%",
                "feedback": "利润不是全部净资产。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "乙ROE",
            "answer": "option-2",
            "explanation": "30÷300。",
            "options": [
              {
                "id": "option-1",
                "text": "30%",
                "feedback": "漏掉平均净资产300元。"
              },
              {
                "id": "option-2",
                "text": "10%"
              },
              {
                "id": "option-3",
                "text": "20%",
                "feedback": "沿用甲的结果。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "ROE较高者",
            "answer": "option-3",
            "explanation": "甲20%高于乙10%。",
            "options": [
              {
                "id": "option-1",
                "text": "乙",
                "feedback": "乙利润多，但平均净资产也多。"
              },
              {
                "id": "option-2",
                "text": "两者相同",
                "feedback": "两者比例不同。"
              },
              {
                "id": "option-3",
                "text": "甲"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "这些结果能支持什么？",
          "options": [
            {
              "id": "option-1",
              "text": "甲ROE较高，所以不看价格和风险也该买甲。",
              "feedback": "比例不能替代完整投资判断。"
            },
            {
              "id": "option-2",
              "text": "甲每元平均净资产对应利润较多，但不足以单独决定买哪家。"
            },
            {
              "id": "option-3",
              "text": "乙利润更多，所以ROE一定更高。",
              "feedback": "遗漏分母。"
            }
          ],
          "answer": "option-2",
          "explanation": "结论限于题给盈利效率比较。"
        },
        "explanation": [
          "先分别做20÷100和30÷300，再比较比例。本题不能把跨公司相关差异当成借款导致ROE变化的因果证据。"
        ]
      },
      {
        "id": "practice-2",
        "title": "借来的本金还要照还",
        "story": [
          "小明用自己10元、借款10元，买入20元投资。价格下跌10%后全部卖出，再归还10元借款本金。假设能按该价格卖出，利息和费用为0，没有追加保证金等其他规则。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "卖出所得",
            "answer": "option-1",
            "explanation": "20×90%＝18元。",
            "options": [
              {
                "id": "option-1",
                "text": "18元"
              },
              {
                "id": "option-2",
                "text": "9元",
                "feedback": "误用自己的10元作为全部资产基数。"
              },
              {
                "id": "option-3",
                "text": "20元",
                "feedback": "忽略跌价。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "还本后自己的钱",
            "answer": "option-2",
            "explanation": "18−10＝8元。",
            "options": [
              {
                "id": "option-1",
                "text": "18元",
                "feedback": "没有归还借款。"
              },
              {
                "id": "option-2",
                "text": "8元"
              },
              {
                "id": "option-3",
                "text": "10元",
                "feedback": "误以为本金不受损失。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "自己的本金收益率",
            "answer": "option-3",
            "explanation": "(8−10)÷10＝−20%。",
            "options": [
              {
                "id": "option-1",
                "text": "−10%",
                "feedback": "这是总资产跌幅。"
              },
              {
                "id": "option-2",
                "text": "−2%",
                "feedback": "2元损失要除以10元，不是100元。"
              },
              {
                "id": "option-3",
                "text": "−20%"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "为什么资产只跌10%，自己的钱却亏20%？",
          "options": [
            {
              "id": "option-1",
              "text": "借款本金也随价格自动减10%。",
              "feedback": "借款没有这种约定。"
            },
            {
              "id": "option-2",
              "text": "资产跌价由剩余权益承受，借款仍按约还本，放大了自有资金的盈亏。"
            },
            {
              "id": "option-3",
              "text": "杠杆只放大亏损，不会放大盈利。",
              "feedback": "涨价情景也会放大本金收益率。"
            }
          ],
          "answer": "option-2",
          "explanation": "同一2元损失落在10元自有本金上。"
        },
        "explanation": [
          "初始负债占资产50%，借来的10元不是自己的净资产。本题的个人本金收益率不等于公司ROE；公司ROE还需对应年度利润和平均净资产口径。"
        ]
      }
    ]
  },
  {
    "id": "earnings-book-and-valuation",
    "number": 16,
    "title": "每股收益、净资产与估值",
    "heading": "股价没变，为什么估值倍数会变？",
    "meta": "第16单元",
    "keywords": "每股收益 市盈率 每股净资产 市净率 每股价格怎样对应利润和账面家底",
    "version": "2026-11-18.u16.1",
    "storageKey": "investment-connected-earnings-book-and-valuation-v1",
    "goal": "把股价与每股利润、每股净资产连接，识别分母变化与亏损时PE的局限。",
    "story": [
      "在另一个合成年度，小店只有10股、股份权利相同，全年股数不变。年度利润20元、年末净资产50元，观察时股价10元。这是新年度给定账本，不与前面月度余额机械相加。分红、增发等未列事项不计算；例子使用同一年度正数利润算历史PE。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "每股收益20÷10＝2元；每股净资产50÷10＝5元。股价10元对应PE 10÷2＝5倍、PB 10÷5＝2倍。PE看价格相对利润，PB看价格相对账面家底。它们都不是未来收益保证，PE也不是保证几年收回买入款。",
          "净资产不等于立即可分配的现金。"
        ]
      }
    ],
    "reviewText": "先核对财报期间、股数与口径，再看价格和分母分别发生什么。低倍数、高账面家底都不能单独完成投资判断。",
    "recall": "回顾第11单元：本期新确认坏账损失，可能同时减少利润和账面家底。估值比率要分别更新各自的分母。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Schwab 财务比率教育文章 2025年8月19日",
        "url": "https://www.schwab.com/learn/story/five-key-financial-ratios-stock-analysis",
        "checked": "2026-11-18"
      },
      {
        "title": "财政部基本准则 2014年修订版",
        "url": "https://www.mof.gov.cn/zcsjtsgb/gztsgb/201407/t20140723_3578373.htm",
        "checked": "2026-11-18"
      }
    ],
    "context": "在另一个合成年度，小店只有10股、股份权利相同，全年股数不变。年度利润20元、年末净资产50元，观察时股价10元。这是新年度给定账本，不与前面月度余额机械相加。分红、增发等未列事项不计算；例子使用同一年度正数利润算历史PE。\n每股收益20÷10＝2元；每股净资产50÷10＝5元。股价10元对应PE 10÷2＝5倍、PB 10÷5＝2倍。PE看价格相对利润，PB看价格相对账面家底。它们都不是未来收益保证，PE也不是保证几年收回买入款。\n净资产不等于立即可分配的现金。",
    "questions": [
      {
        "id": "practice-1",
        "title": "利润变了，账面家底没变",
        "story": [
          "另一完整年度已公布：利润只有10元，年末净资产仍为50元，股数10股不变、股价仍10元。使用该年度利润和期末净资产，分别计算EPS、PE、PB。净资产数值直接给定，不从单项利润倒推全年其他交易。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "每股收益",
            "answer": "option-2",
            "explanation": "10÷10＝1元。",
            "options": [
              {
                "id": "option-1",
                "text": "2元",
                "feedback": "沿用上年度利润。"
              },
              {
                "id": "option-2",
                "text": "1元"
              },
              {
                "id": "option-3",
                "text": "10元",
                "feedback": "公司利润未除股数。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "历史PE",
            "answer": "option-3",
            "explanation": "10÷1＝10倍。",
            "options": [
              {
                "id": "option-1",
                "text": "5倍",
                "feedback": "沿用旧EPS。"
              },
              {
                "id": "option-2",
                "text": "1倍",
                "feedback": "把股价10元除公司总利润10元，没有先转换每股收益。"
              },
              {
                "id": "option-3",
                "text": "10倍"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "PB",
            "answer": "option-1",
            "explanation": "每股净资产仍为5元，10÷5＝2。",
            "options": [
              {
                "id": "option-1",
                "text": "2倍"
              },
              {
                "id": "option-2",
                "text": "10倍",
                "feedback": "把PE当PB。"
              },
              {
                "id": "option-3",
                "text": "1倍",
                "feedback": "把股价10元除公司总利润10元，而非每股净资产5元。"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "股价没涨，为什么PE提高？",
          "options": [
            {
              "id": "option-1",
              "text": "本题利润减少，使每股收益这个分母变小。"
            },
            {
              "id": "option-2",
              "text": "PE提高必定说明股价上涨。",
              "feedback": "本题股价明确没变。"
            },
            {
              "id": "option-3",
              "text": "净资产不变就意味着所有估值比率不变。",
              "feedback": "PE和PB的分母不同。"
            }
          ],
          "answer": "option-1",
          "explanation": "PE同时受价格与每股收益影响。"
        },
        "explanation": [
          "EPS1元，PE10倍，PB2倍。利润与净资产是不同期间或时点的量，本题给定两者，不把利润下降直接替换成相同金额的期末净资产下降。"
        ]
      },
      {
        "id": "practice-2",
        "title": "坏账怎样改变两个估值分母？",
        "story": [
          "回到原年度利润20元、净资产50元。现在本年度首次新增确认25元坏账损失，且此前没计提；其他利润、净资产变动均无变化。股价10元、股数10股。判断更新后的净资产、每股净资产、PB，以及能否用常规正盈利PE直接比较便宜程度。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "净资产",
            "answer": "option-2",
            "explanation": "50−25＝25元。",
            "options": [
              {
                "id": "option-1",
                "text": "50元",
                "feedback": "漏掉新增损失。"
              },
              {
                "id": "option-2",
                "text": "25元"
              },
              {
                "id": "option-3",
                "text": "−5元",
                "feedback": "这是更新后的年度利润，不是净资产。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "每股净资产",
            "answer": "option-1",
            "explanation": "25÷10＝2.5元。",
            "options": [
              {
                "id": "option-1",
                "text": "2.5元"
              },
              {
                "id": "option-2",
                "text": "5元",
                "feedback": "没有更新净资产。"
              },
              {
                "id": "option-3",
                "text": "25元",
                "feedback": "没有除股数。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "PB",
            "answer": "option-3",
            "explanation": "10÷2.5＝4倍。",
            "options": [
              {
                "id": "option-1",
                "text": "2倍",
                "feedback": "沿用原账面家底。"
              },
              {
                "id": "option-2",
                "text": "0.25倍",
                "feedback": "倒置价格与每股净资产。"
              },
              {
                "id": "option-3",
                "text": "4倍"
              }
            ]
          },
          {
            "id": "result-4",
            "label": "常规正盈利PE比较",
            "answer": "option-3",
            "explanation": "EPS为−0.5元，不能沿用正盈利PE便宜程度比较。",
            "options": [
              {
                "id": "option-1",
                "text": "负倍数更低所以一定便宜",
                "feedback": "负利润不能按低正PE逻辑排序。"
              },
              {
                "id": "option-2",
                "text": "可继续当5倍比较",
                "feedback": "年度利润已变为20−25＝−5元。"
              },
              {
                "id": "option-3",
                "text": "不适用这种正盈利PE排序"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "哪些变化可以由损失解释？",
          "options": [
            {
              "id": "option-1",
              "text": "股价没变，所以PE和PB都不会变。",
              "feedback": "忽略分母。"
            },
            {
              "id": "option-2",
              "text": "利润和净资产都受新增损失影响，价格不变也可能改变比率及其适用性。"
            },
            {
              "id": "option-3",
              "text": "坏账不涉及现金付款，所以不影响净资产。",
              "feedback": "非现金损失也会减少利润与净资产。"
            }
          ],
          "answer": "option-2",
          "explanation": "本题须分别更新两个分母。"
        },
        "explanation": [
          "年度利润−5元、EPS−0.5元，不能把价格÷负EPS所得数当成便宜的低正PE。净资产25元、BVPS2.5元、PB4倍。这是同一损失在财务报表与估值分母上的连接。"
        ]
      }
    ]
  },
  {
    "id": "expectations-earnings-and-price",
    "number": 17,
    "title": "市场预期与股价变化",
    "heading": "公司利润增长了，股价为何还能跌？",
    "meta": "第17单元",
    "keywords": "市场预期 估值变化 每股收益与市盈率怎样对应股价 利润增长与股价变化为什么可能不同步",
    "version": "2026-11-18.u17.1",
    "storageKey": "investment-connected-expectations-earnings-and-price-v1",
    "goal": "在给定情景下同时追踪EPS与PE，并区分低于预期、价格变化和因果解释。",
    "story": [
      "小店上一期EPS2元，观察股价20元，对应PE10倍。买家曾预期本期EPS4元，实际是3元；同一观察时点、按这份实际利润计算的PE给定为5倍。数字均是假设，PE是外生给定情景，不声称已经证明预期落差单独造成了PE下降。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "实际EPS3元比原来2元增加50%，但低于预期4元。按给定PE5倍，对应价格3×5＝15元，比20元低25%。价格＝EPS×PE在正利润与同一口径下是定义关系，不是独立预测工具。没有给出未来PE，就不能靠预计利润精确预测未来股价。"
        ]
      }
    ],
    "reviewText": "先分清过去、预期与实际，再核对EPS与PE是否同口径。观察到同时变化，不自动证明单一因果。",
    "recall": "回顾第16单元：把股价、每股收益和市盈率放在同一个口径里比较。历史倍数和未来倍数是不同输入。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Schwab 财务比率教育文章 2025年8月19日 价格与EPS口径",
        "url": "https://www.schwab.com/learn/story/five-key-financial-ratios-stock-analysis",
        "checked": "2026-11-18"
      }
    ],
    "context": "小店上一期EPS2元，观察股价20元，对应PE10倍。买家曾预期本期EPS4元，实际是3元；同一观察时点、按这份实际利润计算的PE给定为5倍。数字均是假设，PE是外生给定情景，不声称已经证明预期落差单独造成了PE下降。\n实际EPS3元比原来2元增加50%，但低于预期4元。按给定PE5倍，对应价格3×5＝15元，比20元低25%。价格＝EPS×PE在正利润与同一口径下是定义关系，不是独立预测工具。没有给出未来PE，就不能靠预计利润精确预测未来股价。",
    "questions": [
      {
        "id": "practice-1",
        "title": "每股收益增长，市盈率下降",
        "story": [
          "沿用上述情景：旧EPS2元、股价20元；本期原预期EPS4元，实际3元，观察PE5倍。判断对应价格、相对20元的变化率及预期比较。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "对应价格",
            "answer": "option-2",
            "explanation": "3×5＝15元。",
            "options": [
              {
                "id": "option-1",
                "text": "30元",
                "feedback": "沿用旧PE10倍。"
              },
              {
                "id": "option-2",
                "text": "15元"
              },
              {
                "id": "option-3",
                "text": "20元",
                "feedback": "没有更新两个条件。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "价格变化率",
            "answer": "option-1",
            "explanation": "(15−20)÷20＝−25%。",
            "options": [
              {
                "id": "option-1",
                "text": "−25%"
              },
              {
                "id": "option-2",
                "text": "−50%",
                "feedback": "这是PE的变化比例。"
              },
              {
                "id": "option-3",
                "text": "＋50%",
                "feedback": "这是EPS相对旧值的增长。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "实际相对原预期",
            "answer": "option-3",
            "explanation": "实际3元低于预期4元。",
            "options": [
              {
                "id": "option-1",
                "text": "高于",
                "feedback": "3小于4。"
              },
              {
                "id": "option-2",
                "text": "相同",
                "feedback": "3不等于4。"
              },
              {
                "id": "option-3",
                "text": "低于"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "本题能够说明什么？",
          "options": [
            {
              "id": "option-1",
              "text": "利润增长就一定推动股价上涨。",
              "feedback": "两项相乘的结果可能下降。"
            },
            {
              "id": "option-2",
              "text": "低于预期是所有股价下跌的唯一原因。",
              "feedback": "本例没有排除其他影响倍数的因素。"
            },
            {
              "id": "option-3",
              "text": "给定倍数下降足以抵消本例EPS增长，但不能从本题断言单一原因或普遍规律。"
            }
          ],
          "answer": "option-3",
          "explanation": "算术结果明确，因果与未来判断仍有限。"
        },
        "explanation": [
          "EPS增长50%，PE由10降至5，价格变为20×1.5×0.5＝15元。不能把两个百分比直接相加得到0%。"
        ]
      },
      {
        "id": "practice-2",
        "title": "符合预期时，价格怎样变？",
        "story": [
          "独立对照情景：旧EPS仍2元、旧价格20元。新一期预期EPS4元、实际也4元，观察PE为8倍。判断对应价格、涨幅，以及只凭“符合预期”能否确定涨跌。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "对应价格",
            "answer": "option-1",
            "explanation": "4×8＝32元。",
            "options": [
              {
                "id": "option-1",
                "text": "32元"
              },
              {
                "id": "option-2",
                "text": "40元",
                "feedback": "忽略PE已变8。"
              },
              {
                "id": "option-3",
                "text": "16元",
                "feedback": "沿用旧EPS2元。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "相对20元涨幅",
            "answer": "option-2",
            "explanation": "(32−20)÷20＝60%。",
            "options": [
              {
                "id": "option-1",
                "text": "100%",
                "feedback": "仅看EPS翻倍。"
              },
              {
                "id": "option-2",
                "text": "60%"
              },
              {
                "id": "option-3",
                "text": "−20%",
                "feedback": "只看PE下降20%。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "仅凭符合预期判断涨跌",
            "answer": "option-3",
            "explanation": "本题因另给PE才能算出32元。",
            "options": [
              {
                "id": "option-1",
                "text": "一定不涨不跌",
                "feedback": "符合预期不锁定价格。"
              },
              {
                "id": "option-2",
                "text": "一定上涨",
                "feedback": "还需价格口径和倍数等信息。"
              },
              {
                "id": "option-3",
                "text": "不能单独确定"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "为什么符合预期仍可在本情景中上涨？",
          "options": [
            {
              "id": "option-1",
              "text": "符合预期本身保证上涨。",
              "feedback": "不能把情景结果扩大成规则。"
            },
            {
              "id": "option-2",
              "text": "价格由给定EPS和倍数共同对应，实际价格变化不是单靠预期标签决定。"
            },
            {
              "id": "option-3",
              "text": "PE下降时价格绝不可能上涨。",
              "feedback": "EPS增长可以超过倍数下降的影响。"
            }
          ],
          "answer": "option-2",
          "explanation": "4元EPS与8倍共同给出32元。"
        },
        "explanation": [
          "用4×8而非预期标签定价。本题给定条件下上升60%；若未来倍数未知，不能把这个算例当成价格预测。"
        ]
      }
    ]
  },
  {
    "id": "dividends-profit-and-price",
    "number": 18,
    "title": "分红率、股息率与现金",
    "heading": "股息率看起来更高，能说明什么？",
    "meta": "第18单元",
    "keywords": "股息率 分红率 分红比例现金能力与股息率",
    "version": "2026-11-18.u18.1",
    "storageKey": "investment-connected-dividends-profit-and-price-v1",
    "goal": "把分红相对利润、相对股价以及实际可付款现金分别计算，不把历史分红当未来承诺。",
    "story": [
      "在另一个完整年度，小店10股、年度利润20元，EPS2元；观察股价10元。拟从该年度利润中分红10元，即每股1元。本例分红率10÷20＝50%，以这笔年度分红算股息率1÷10＝10%。",
      "前者分母是利润，后者分母是股价。利润可以留在应收或设备等地方，并不等于可立即支付的现金。案例不讨论法定分红条件或除息交易规则；现金可支付与分红合法性是不同问题。"
    ],
    "worked": [
      {
        "title": "看小明怎么算",
        "paragraphs": [
          "若可用于分红的现金只有6元，在本例禁止借款、增资、出售资产等额外资金来源时，拟付10元会差4元。把计划改为付6元，每股0.6元、分红率30%、按10元股价算股息率6%。这仅是本题资金约束下的上限，不代表公司已经承诺分红。",
          "若股价下降，使用旧年度分红算的股息率可能上升，不能据此保证未来分红或总回报。"
        ]
      }
    ],
    "reviewText": "分红率看利润怎么分，股息率看分红与买价之比，现金约束看能否付款。三者不能相互替代。",
    "recall": "回顾第10、13单元：账面利润可能还没变成现金，也可能包含只出现一次的收益。还要另外看实际付款能力。",
    "conditions": "人物、金额和交易均为合成教学案例。计算按各题明确给出的条件，选项中的收益和价格不代表实际投资结果。",
    "sourceNote": "依据与适用范围。下列资料用于解释概念与计算口径。",
    "source": [
      {
        "title": "Investor.gov 股票教育页 无标注更新日",
        "url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks",
        "checked": "2026-11-18"
      },
      {
        "title": "FINRA 财务报表教育文章 2025年7月8日",
        "url": "https://syndication.finra.org/content/using-financial-statements-evaluate-investment-opportunities",
        "checked": "2026-11-18"
      }
    ],
    "context": "在另一个完整年度，小店10股、年度利润20元，EPS2元；观察股价10元。拟从该年度利润中分红10元，即每股1元。本例分红率10÷20＝50%，以这笔年度分红算股息率1÷10＝10%。前者分母是利润，后者分母是股价。利润可以留在应收或设备等地方，并不等于可立即支付的现金。案例不讨论法定分红条件或除息交易规则；现金可支付与分红合法性是不同问题。\n若可用于分红的现金只有6元，在本例禁止借款、增资、出售资产等额外资金来源时，拟付10元会差4元。把计划改为付6元，每股0.6元、分红率30%、按10元股价算股息率6%。这仅是本题资金约束下的上限，不代表公司已经承诺分红。\n若股价下降，使用旧年度分红算的股息率可能上升，不能据此保证未来分红或总回报。",
    "questions": [
      {
        "id": "practice-1",
        "title": "利润有20元，现金只够分6元",
        "story": [
          "利润20元、10股、股价10元；拟分10元，但可分红现金只有6元。没有其他资金来源，且本题假设其他分红条件均已满足。判断按现金约束最多可付总额、每股金额、分红率和股息率。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "最多可付总额",
            "answer": "option-3",
            "explanation": "本题资金上限6元。",
            "options": [
              {
                "id": "option-1",
                "text": "20元",
                "feedback": "利润不等于现金。"
              },
              {
                "id": "option-2",
                "text": "10元",
                "feedback": "超过现金4元。"
              },
              {
                "id": "option-3",
                "text": "6元"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "每股金额",
            "answer": "option-1",
            "explanation": "6÷10＝0.6元。",
            "options": [
              {
                "id": "option-1",
                "text": "0.6元"
              },
              {
                "id": "option-2",
                "text": "6元",
                "feedback": "没有除股数。"
              },
              {
                "id": "option-3",
                "text": "1元",
                "feedback": "仍用未实现的原计划。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "分红率",
            "answer": "option-2",
            "explanation": "6÷20＝30%。",
            "options": [
              {
                "id": "option-1",
                "text": "60%",
                "feedback": "把6除以10元现金计划，不是年度利润。"
              },
              {
                "id": "option-2",
                "text": "30%"
              },
              {
                "id": "option-3",
                "text": "50%",
                "feedback": "仍用原拟分10元。"
              }
            ]
          },
          {
            "id": "result-4",
            "label": "按10元价格的股息率",
            "answer": "option-3",
            "explanation": "0.6÷10＝6%。",
            "options": [
              {
                "id": "option-1",
                "text": "30%",
                "feedback": "把分红率当股息率。"
              },
              {
                "id": "option-2",
                "text": "10%",
                "feedback": "仍用每股1元计划。"
              },
              {
                "id": "option-3",
                "text": "6%"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "为什么不能只看利润20元就认定能付10元？",
          "options": [
            {
              "id": "option-1",
              "text": "利润未必已变成可支付现金，需同时看资金和分红约束。"
            },
            {
              "id": "option-2",
              "text": "有利润就会自动出现等额现金。",
              "feedback": "应收、存货和设备会造成差异。"
            },
            {
              "id": "option-3",
              "text": "公司不能少于原计划分红。",
              "feedback": "本题只是拟议计划，没有该保证。"
            }
          ],
          "answer": "option-1",
          "explanation": "题给现金只有6元。"
        },
        "explanation": [
          "依次计算6元、0.6元、30%、6%，不把现金不足自动归因于坏生意，也不把补充借款当成题内已发生的事实。"
        ]
      },
      {
        "id": "practice-2",
        "title": "历史股息率与下一年的情景",
        "story": [
          "独立情景：过去一年每股已分红1元，现在股价由10元跌至5元。另给定新的下一年度分红情景为每股0.2元，对应年度EPS仍假设为2元。两段分红不能混用，也不把给定情景当现实保证。"
        ],
        "prompt": "请分别选择下列各项的结果。",
        "parts": [
          {
            "id": "result-1",
            "label": "用过去1元算的历史股息率",
            "answer": "option-1",
            "explanation": "1÷5＝20%。",
            "options": [
              {
                "id": "option-1",
                "text": "20%"
              },
              {
                "id": "option-2",
                "text": "10%",
                "feedback": "沿用旧价格10元。"
              },
              {
                "id": "option-3",
                "text": "4%",
                "feedback": "这是0.2元新情景的比率。"
              }
            ]
          },
          {
            "id": "result-2",
            "label": "用新情景0.2元算的股息率",
            "answer": "option-2",
            "explanation": "0.2÷5＝4%。",
            "options": [
              {
                "id": "option-1",
                "text": "20%",
                "feedback": "错用过去1元。"
              },
              {
                "id": "option-2",
                "text": "4%"
              },
              {
                "id": "option-3",
                "text": "2%",
                "feedback": "仍用旧价格10元作分母：0.2÷10＝2%。"
              }
            ]
          },
          {
            "id": "result-3",
            "label": "新情景分红率",
            "answer": "option-3",
            "explanation": "0.2÷2＝10%。",
            "options": [
              {
                "id": "option-1",
                "text": "4%",
                "feedback": "把价格当利润分母。"
              },
              {
                "id": "option-2",
                "text": "20%",
                "feedback": "把历史股息率1÷5＝20%错当作新情景分红率。"
              },
              {
                "id": "option-3",
                "text": "10%"
              }
            ]
          }
        ],
        "relation": {
          "prompt": "历史股息率升到20%能证明什么？",
          "options": [
            {
              "id": "option-1",
              "text": "未来每年保证拿20%。",
              "feedback": "未来金额、价格变化和税费均不由此保证。"
            },
            {
              "id": "option-2",
              "text": "仅能说明用过去分红与当前价格算出的比例，不能保证未来分红或总回报。"
            },
            {
              "id": "option-3",
              "text": "股价下跌说明分红金额必定同步增加。",
              "feedback": "价格和分红是不同量。"
            }
          ],
          "answer": "option-2",
          "explanation": "本题下一年度情景股息率只有4%。"
        },
        "explanation": [
          "过去1元与未来情景0.2元分别使用。即使收到分红，持仓价格仍可能亏损；本题未给未来成交价，不能计算未来总回报。"
        ]
      }
    ]
  }
];
