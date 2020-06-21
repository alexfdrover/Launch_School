=begin
  Input: string
  Output: array of strings
  Examples: Given in test suite
  Algo:
  make lookup table
  take strand, break into codons
  for each codon, check the lookup table for it's name
    list each protein encountered until STOP is encountered
  squish the list to remove duplicate names
=end
class InvalidCodonError < StandardError; end

class Translation
  LOOKUP_TABLE = { ['AUG']                       => 'Methionine',
                   ['UUU', 'UUC']                => 'Phenylalanine',
                   ['UUA', 'UUG']                => 'Leucine',
                   ['UCU', 'UCC', 'UCA', 'UCG']  => 'Serine',
                   ['UAU', 'UAC']                => 'Tyrosine',
                   ['UGU', 'UGC']                => 'Cysteine',
                   ['UGG']                       => 'Tryptophan',
                   ['UAA', 'UAG', 'UGA']         => 'STOP' }

  def self.of_codon(codon)
    protein = []
    LOOKUP_TABLE.keys.each do |key_arr|
      raise InvalidCodonError unless key_arr.include?(codon)
      protein << LOOKUP_TABLE.fetch(key_arr) if key_arr.include?(codon)
    end
    protein[0]
  end

  def self.of_rna(strand)
    codon_arr = []
    strand.chars.each_slice(3) { |a| codon_arr << a.join }
    codon_arr.take_while do |codon|
      Translation.of_codon(codon) != 'STOP'
    end.uniq.map { |codon| Translation.of_codon(codon) }
  end
end

strand = 'AUGUUUUGG'
p Translation.of_rna(strand)