const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async delete (req, res){
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .select('*')
            .where('id',id)
            .first();

        if(incident.ong_id !== ong_id){
            return res.status(401).json({error: 'Not permission!'})
        }

        await connection('incidents')
            .del()
            .where('id', id);

        return res.status(204).send();
    },

    async create (req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return res.json({id});
    },

    async index (req, res) {
        const { page } = req.query;

        const [count] = await connection('incidents')
            .count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', "=",'incidents.ong_id')
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf',
            ])
            .limit(5)
            .offset((page -1) * 5);

        res.header('X-Total-Count', count['count(*)']);

        return res.json(incidents);
    }
}