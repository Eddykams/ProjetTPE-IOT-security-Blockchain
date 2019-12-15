/**
 * Create a new asset
 * @param {org.tempeture.blockchain.CreateNewAsset} asset
 * @transaction
 */
async function createNewAsset(asset) {
    let assetRegistry = await getAssetRegistry('org.tempeture.blockchain.TempetureAsset');
    var factory = getFactory()

    num_id = (Math.floor(Math.random() * ( 999999 - 100000) + 100000)).toString(10)

    var assetID = num_id;
    var newAsset = factory.newResource('org.tempeture.blockchain', 'TempetureAsset', assetID)
    newAsset.tempeture = asset.tempeture;
    newAsset.localisation = asset.localisation;
    newAsset.temps = asset.temps;
    newAsset.description = asset.description;
    
    await assetRegistry.add(newAsset)
}