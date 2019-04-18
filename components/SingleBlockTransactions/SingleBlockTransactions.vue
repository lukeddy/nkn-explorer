<template>
  <CardContainer>
    <SingleBlockTxCard v-for="tx in blockTransactions" :key="tx.id" :tx="tx"/>
  </CardContainer>
</template>

<style lang="scss">
@import './SingleBlockTransactions.scss';
</style>

<script>
import CardContainer from '~/components/CardContainer/CardContainer'
import SingleBlockTxCard from '~/components/SingleBlockTxCard/SingleBlockTxCard'

export default {
  components: { CardContainer, SingleBlockTxCard },
  props: {
    transactions: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data: () => {
    return {
      blockTransactions: [
        {
          id: 2867839,
          hash:
            '6cc42ce41f3043c8f620107d898a495a51c8d48f7bdd235d52d13ca456cb90e0',
          payloadVersion: 0,
          txType: 'CoinbaseType',
          block_id: 828717,
          sender: null,
          timestamp: '2019-04-17 21:45:33',
          created_at: '2019-04-17 21:46:01',
          updated_at: '2019-04-17 21:46:01',
          payload: null,
          outputs: [
            {
              id: 834543,
              address: 'NUcCZ5GPgYKsDZJ41QNXZvz4E8GXBfE4m8',
              assetID:
                '4945ca009174097e6614d306b66e1f9cb1fce586cb857729be9e1c5cc04c9c02',
              value: '15',
              transaction_id: 2867839,
              timestamp: '2019-04-17 21:45:33',
              created_at: '2019-04-17 21:46:01',
              updated_at: '2019-04-17 21:46:01'
            }
          ],
          node_tracing: [],
          inputs: [],
          attributes: [
            {
              id: 2867840,
              data:
                'a650cdd6ad4a8db33762a82118786928d2ed7a331aabb52ebe6f2cade1f8d256',
              usage: 0,
              transaction_id: 2867839,
              created_at: '2019-04-17 21:46:01',
              updated_at: '2019-04-17 21:46:01'
            }
          ]
        },
        {
          id: 2867840,
          hash:
            '57b6282ba063fd5f24263f8f7033d82308da6f6c267bbca318aef6a5c4dfc3d8',
          payloadVersion: 0,
          txType: 'CommitType',
          block_id: 828717,
          sender: null,
          timestamp: '2019-04-17 21:45:33',
          created_at: '2019-04-17 21:46:01',
          updated_at: '2019-04-17 21:46:01',
          payload: {
            id: 2034029,
            sigChain:
              '100c1a207509e5bda0c762d2bac7f90d758b5b2263fa01ccbc542ab5e3df163be08e6ca9222061e4841c6964dbe9982840aac9879e6fe277ed409b7272dc7359f9ce4db2f3402a2102c1d6308970f04a3c22290015f7eb34877e6069ae0494a224fa04ca77dd457148322102c1d6308970f04a3c22290015f7eb34877e6069ae0494a224fa04ca77dd4571483a450a20c092675281698be6608e011a30394df712eba47942997f780664885fc8f09df6122102281bf4bb47679d64d92562ba1e80ef5aa947c6e44bb017c3913cd4e3b892129b3a89010a20c08e676398ac510e248e56e53a19ad50001f3f19a932b9e9145fb0f2fe10edce122102f7d7980aac68f70c56b0e1ed478d6b611a3a123792ea6bd5de5cf2ef91d258f918012a408a8c635e2440af5b04f4885ea2aaedbeb18deb7d9ba512443feeabda95e9570c88ca38c109bda03006c63f0e3c66f4317f1b2034b6b900b31c778aa4cff05df93a89010a204094e91488844b76f1266b65b0a77c2fb0c6272ae37860e8eca37a3ab483cec312210309aee0b52437d00430833470cc407a35c206fe1fa00bce10c02b37603374334618012a400fe38ebed595c431ec8fcbb4fc3f4bbd964e3625ba9bd1cee0f616c7337cf10a20b52935cbe10b1f6e976553faefc6ee5c013eefde88ce4c52008c62b7ed0df73a89010a20809ed50ccff630644f47b401e8015424432402c3384981d38c8366f45a74640712210300576166a4cb73d9ff29bb36df7331ae12b15610df26a9ef4336c39bcba9c73e18012a4073916c3e623fa009cfa10785a93864c69dc19918724db845f1fbfb9dc84c5d8b50b41c6fe79179a562f572fffa42a4e6fd5f882d1379e9cf931c9a3e8e8ae3ba3a89010a20a0ad6a8a1f3200626ee71b13da5515a2ce6d7e435327cd74a5e0585e804e621b122102ac1fa4c9e7d92cd6433c711958c820166fad0afca0dbc23355a4195f4fe23a3218012a4052aca1d2200a2cf97c096bc0cf1055c56712d12b727354dbc9fb083026efd751ebd8cf1fe06e55d1a584a511fa5225ec3577c39e5fe3bd08d2b0caf720498f5f3a89010a20b0b75a77c021a19bf354764340d069f8c7db2de5fb496cdfef2cabc35bf91c31122102281bf4bb47679d64d92562ba1e80ef5aa947c6e44bb017c3913cd4e3b892129b18012a40978a01e32a2c62355187e2d983c7c6440742938ce6d5fce597800e3d122b83ab8296a8b37cd309bd8bca5e569e10bfe212330fdb07dcad6e06a52427292921ec3a89010a20b8c05a57476980c846d8fbd1c15add721c03964edf6c3e527f20c4cc318df60212210309aee0b52437d00430833470cc407a35c206fe1fa00bce10c02b37603374334618012a40949591989db7d0aa4807fb0f4e4a01f4341a22a2dd8a9ee984431d6d15c5e042cbb7b7ab68b5a9bbe6b2c0d831adb2459c8dafafe328283dc9ecec1235f170903a89010a20bad4ae0b4813dd89ad4767a92b62adade04d43afa9ec15e074d2ce80fd021cb512210351d33223d9288b6edc49de0f058787111debf77934de45a3d7f65a9295e0c55e18012a403b631a39cb228ffe1dd8bc264c846d937a192d5b29705f2174d1322bdae324fbec79d6957e38df2406a1cb98fd5dc91376a1e3f2f7358cbfd69be2f690a583323a89010a20bbd6019098245c5d603a033dcb2588ca32aba5906a9394bb3e5533c8e5099994122103775d6b0355c7f2424611f7e595894725f27425d65ccf2867fd3a2c01032de62518012a4014b9d155179b5463f94f9f17ba87135df55acc86ab5466309d3aaa21fa5f33de508a96776211e1e50bdc2365d9f025844f3eeab76bd86c1b2622984a73e3688a3a89010a20bc58c7eedfb90066a632f3760e43742c40953b32b145bfcc9c9877d34fdb502a122102ba57787a4074335f8f23e130451b3fa4dfb9fadc20a27cb163e072d53c39780818012a407d7b47861255ed464a90142babb9fc760d83ee98d76c3f8aca5b7536075af8c7d7af0e61d98d1246f9dc31003fa402fbc064f4daa007fe5e3bc076d5149e8a933a89010a20bcb34e5843ecd6168eb259291c64cc787ae59a9d7d6ea95d9a8f2febc3f5ee12122102c1d6308970f04a3c22290015f7eb34877e6069ae0494a224fa04ca77dd45714818012a401117b2664d15e5b15f569b23fe893156ec6fd3387fb3aabcff8945d4a40360124477b01977eab7b90b5ded69800720ce3975e7c2b5f0e625bb55e1e51b2aa58a3a450a20bcbb85f6b112c24862bd5339b20476ef8c9ad6c673675cb7cccfff22e3743a27122102c1d6308970f04a3c22290015f7eb34877e6069ae0494a224fa04ca77dd457148',
            submitter: '74a4466395eb7920ea344f6987337934ea7ba983',
            transaction_id: 2867840,
            created_at: '2019-04-17 21:46:01',
            updated_at: '2019-04-17 21:46:01',
            name: null,
            registrant: null
          },
          outputs: [],
          node_tracing: [
            {
              id: 16670993,
              node_pk:
                'c092675281698be6608e011a30394df712eba47942997f780664885fc8f09df6',
              priority: 0,
              continent_code: null,
              continent_name: null,
              country_code2: null,
              country_code3: null,
              country_name: null,
              country_capital: null,
              state_prov: null,
              district: null,
              city: null,
              zipcode: null,
              latitude: null,
              longitude: null,
              is_eu: null,
              calling_code: null,
              country_tld: null,
              isp: null,
              connection_type: null,
              organization: null,
              geoname_id: null
            },
            {
              id: 16670994,
              node_pk:
                'c08e676398ac510e248e56e53a19ad50001f3f19a932b9e9145fb0f2fe10edce',
              priority: 1,
              continent_code: 'EU',
              continent_name: 'Europe',
              country_code2: 'DE',
              country_code3: 'DEU',
              country_name: 'Germany',
              country_capital: 'Berlin',
              state_prov: 'Hesse',
              district: null,
              city: 'Frankfurt am Main',
              zipcode: '60313',
              latitude: '50.11090000',
              longitude: '8.68213000',
              is_eu: '1',
              calling_code: '+49',
              country_tld: '.de',
              isp: 'DigitalOcean, LLC',
              connection_type: null,
              organization: 'Digital Ocean',
              geoname_id: '2925533'
            },
            {
              id: 16670995,
              node_pk:
                '4094e91488844b76f1266b65b0a77c2fb0c6272ae37860e8eca37a3ab483cec3',
              priority: 2,
              continent_code: 'EU',
              continent_name: 'Europe',
              country_code2: 'DE',
              country_code3: 'DEU',
              country_name: 'Germany',
              country_capital: 'Berlin',
              state_prov: 'Hesse',
              district: null,
              city: 'Frankfurt am Main',
              zipcode: '60313',
              latitude: '50.11090000',
              longitude: '8.68213000',
              is_eu: '1',
              calling_code: '+49',
              country_tld: '.de',
              isp: 'DigitalOcean, LLC',
              connection_type: null,
              organization: 'DigitalOcean, LLC',
              geoname_id: '2925533'
            },
            {
              id: 16670996,
              node_pk:
                '809ed50ccff630644f47b401e8015424432402c3384981d38c8366f45a746407',
              priority: 3,
              continent_code: 'EU',
              continent_name: 'Europe',
              country_code2: 'NL',
              country_code3: 'NLD',
              country_name: 'Netherlands',
              country_capital: 'Amsterdam',
              state_prov: 'North Holland',
              district: '',
              city: 'Amsterdam',
              zipcode: '1095KL',
              latitude: '52.35630000',
              longitude: '4.95714000',
              is_eu: '1',
              calling_code: '+31',
              country_tld: '.nl',
              isp: 'DigitalOcean, LLC',
              connection_type: '',
              organization: 'Digital Ocean',
              geoname_id: '2759794'
            },
            {
              id: 16671004,
              node_pk:
                'bcbb85f6b112c24862bd5339b20476ef8c9ad6c673675cb7cccfff22e3743a27',
              priority: 11,
              continent_code: null,
              continent_name: null,
              country_code2: null,
              country_code3: null,
              country_name: null,
              country_capital: null,
              state_prov: null,
              district: null,
              city: null,
              zipcode: null,
              latitude: null,
              longitude: null,
              is_eu: null,
              calling_code: null,
              country_tld: null,
              isp: null,
              connection_type: null,
              organization: null,
              geoname_id: null
            }
          ],
          inputs: [],
          attributes: [
            {
              id: 2867841,
              data:
                'b737659e1a1166a6a0579008d51a8ed4663fe8bd867aa5f40a7c2077ddab91c9',
              usage: 0,
              transaction_id: 2867840,
              created_at: '2019-04-17 21:46:01',
              updated_at: '2019-04-17 21:46:01'
            }
          ]
        },
        {
          id: 2035118,
          hash:
            '06b96d8a85222228853070c2ec1b667144946e3f94d99c848cf4fe108f5167f1',
          payloadVersion: 0,
          txType: 'transfer',
          block_id: 446091,
          sender: 'NVKDBKYAJ55pXJSNj3TNFYaeZDGa8mT9V3',
          timestamp: '2019-01-10 00:24:00',
          created_at: '2019-04-10 08:52:44',
          updated_at: '2019-04-10 08:52:44',
          payload: null,
          outputs: [
            {
              id: 448170,
              address: 'NhWjY9iwD5Ad8DafiEWbTo4buLpBomdttH',
              assetID:
                '4945ca009174097e6614d306b66e1f9cb1fce586cb857729be9e1c5cc04c9c02',
              value: '10',
              transaction_id: 2035118,
              timestamp: '2019-01-10 00:24:00',
              created_at: '2019-04-10 08:52:44',
              updated_at: '2019-04-10 08:52:44'
            },
            {
              id: 448171,
              address: 'NVKDBKYAJ55pXJSNj3TNFYaeZDGa8mT9V3',
              assetID:
                '4945ca009174097e6614d306b66e1f9cb1fce586cb857729be9e1c5cc04c9c02',
              value: '5',
              transaction_id: 2035118,
              timestamp: '2019-01-10 00:24:00',
              created_at: '2019-04-10 08:52:44',
              updated_at: '2019-04-10 08:52:44'
            }
          ],
          node_tracing: [],
          inputs: [
            {
              id: 215925,
              referTxID:
                '3a7f89a97816f2b68abe0253364df28be0637196db31c23e5e82327b8d8f99c4',
              referTxOutputIndex: 0,
              transaction_id: 2035118,
              created_at: '2019-04-10 08:52:44',
              updated_at: '2019-04-10 08:52:44'
            }
          ],
          attributes: [
            {
              id: 2035118,
              data:
                'a6838b0e1a794854bedba9fe2b530185bc31c075934b6cbb4a8d76b810ddecbe',
              usage: 0,
              transaction_id: 2035118,
              created_at: '2019-04-10 08:52:44',
              updated_at: '2019-04-10 08:52:44'
            }
          ],
          block: {
            id: 446091,
            hash:
              '625bcfa5661a003617fb0884006af5491c2c3bb560375b7b9413e5dc70a4ef5d',
            height: 446090,
            prevBlockHash:
              '4f91b462ec473e9013bf295421730a5921e21088bd10ea97edb295c7b3300254',
            nextBlockHash:
              'bcb7004bf63a09c9750dc4cde1f465e650d67a9cb0b78331508f900a64fb3ff0',
            signature:
              '0f76c88ce3136de6cc77f010c98110970cbfe573cd55ed415b2b11772f9a2893b029c3c933db4192602815d75536e98ed35a29d0b45d5f444869b365a4145f08',
            signer:
              '039d651e55b076539f55e9b39ca1ed5e5007397dad697d2cd0362cc8b8bff04092',
            timestamp: '2019-01-10 00:24:00',
            transactionsRoot:
              'e837430f81e9c09b1f5e927fce579eb7660a1c7a5b52598c0df6bd8692f42d97',
            version: 1,
            winningHash:
              '7d0c3d56dde203a9713555d6fa6004436dae86fa88e082abdea0b2960974e7b5',
            winningHashType: 1,
            code: '00',
            parameter: '00',
            transaction_count: 6,
            created_at: '2019-04-10 08:52:44',
            updated_at: '2019-04-10 08:52:44',
            chordID:
              'acb4995ad8d0732ebcbf27be993c5b5ffc164aed5e96fd9862734f68e99eb820'
          }
        }
      ]
    }
  },
  mounted: function() {},
  methods: {}
}
</script>
