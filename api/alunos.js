const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

module.exports = async (req, res) => {

    if (req.method === 'GET') {

        const { data, error } = await supabase
            .from('alunos')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            return res.status(500).json({
                erro: error.message
            });
        }

        return res.status(200).json(data);
    }

    if (req.method === 'POST') {

        const { nome, email, curso } = req.body;

        if (!nome || !email || !curso) {
            return res.status(400).json({
                erro: 'Nome, email e curso são obrigatórios.'
            });
        }

        const { data, error } = await supabase
            .from('alunos')
            .insert([
                {
                    nome: nome,
                    email: email,
                    curso: curso
                }
            ])
            .select();

        if (error) {
            return res.status(500).json({
                erro: error.message
            });
        }

        return res.status(201).json({
            mensagem: 'Aluno cadastrado com sucesso!',
            aluno: data[0]
        });
    }

    return res.status(405).json({
        erro: 'Método não permitido.'
    });
};