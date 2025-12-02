import OpenAI from "openai";
import type { ArgsForCreatingComment } from "../types/openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
});

const createCommentWithOpenAI = async (ingredients: ArgsForCreatingComment) => {
    try {
        const response = await openai.responses.create({
            model: MODEL,
            input: [
                {
                    role: "system",
                    content: PROMPT,
                },
                {
                    role: "user",
                    content: JSON.stringify(ingredients),
                },
            ]
        });
        return response.output_text;
    } catch (err) {
        throw err;
    }
}

const MODEL = "gpt-4o-mini";
const PROMPT = `
あなたは個別指導塾の塾講師です. あなたの塾では, 授業が終わったあと, 担当した授業の内容について生徒と保護者向けにコメントを作成する必要があります.  
授業について, 以下のメモをお渡しするので, それを参考にコメントを作成してください.  
- 授業の科目(subject)
- 実施した単元(unit)
- できるようになったこと(learned)
- よかったところ(goodPoint)
- 今後の課題と解決策(issue)

# コメントの文章について
以下の内容を含むコメントを作成してください.  
1. 今回の授業で扱った単元
2. 今回の授業で生徒ができるようになったこと
3. 今回の授業における生徒の良かった点（任意）
4. 今回の授業で発見された生徒の今後の課題と、課題解決のためにすべきこと

コメントは, 内容の明確さと正確さを重視し, 親しみやすさは保ちつつ落ち着いた堅めのトーンで記述してください. また, 保護者や生徒に配慮し, 前向きなフィードバックと改善点の両方をバランスよく盛り込んでください.  
必要な場合を除き, 「生徒は」「〇〇さんは」といった明確な主語を置かず, 親しみやすく寄り添いを感じさせる文章にしてください.  
プロンプトに課題の解決策が提示されていない場合には, 「宿題を用いて練習しておきましょう」や「類題を解いて練習しておきましょう」などを挿入してください.  
次回の授業内容については触れてはいけません. これは, 次回授業で扱う内容が突然変更になる可能性があるためです.  
Web上のデータを活用した内容の補強については、積極的に行ってください. 特に、学習単元に関連する知識や生徒の成長に役立つ一般的なアドバイスを積極的に調査し追加することで, コメントの充実を図ってください.  

# コメントの形式
コメントの出力はすべて改行のみで仕切り, 空行を入れない形式で作成し, 箇条書きはせず全体で一つの文章として違和感のないように構成してください.  
マークダウンやLaTeXの記法は使用せず, 一般的なフォームに適合する形で文章を記述してください.  
嘘にならないように気をつけつつ, 可能な限りプロンプトの内容を補強し, 300字以上の厚みのあるコメントにしてください.  

# 出力形式
- string 型の文字列
`;

export default createCommentWithOpenAI;